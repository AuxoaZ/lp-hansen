import "server-only";
import { createHash, createHmac, randomBytes, timingSafeEqual } from "crypto";

export const ADMIN_SESSION_COOKIE = "hansen_admin_session";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 8;

type SessionPayload = {
  expiresAt: number;
  nonce: string;
};

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  return secret && Buffer.byteLength(secret, "utf8") >= 32 ? secret : null;
}

export function isAdminAuthConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && getSessionSecret());
}

function sign(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function createAdminSession() {
  const secret = getSessionSecret();
  if (!secret) throw new Error("ADMIN_SESSION_SECRET must be set to at least 32 bytes.");

  const payload: SessionPayload = {
    expiresAt: Date.now() + ADMIN_SESSION_MAX_AGE * 1000,
    nonce: randomBytes(16).toString("base64url"),
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${encodedPayload}.${sign(encodedPayload, secret)}`;
}

export function verifyAdminSession(token: string | undefined) {
  const secret = getSessionSecret();
  if (!secret || !token) return false;

  const [encodedPayload, signature, extra] = token.split(".");
  if (!encodedPayload || !signature || extra !== undefined) return false;

  const expected = Buffer.from(sign(encodedPayload, secret), "base64url");
  const received = Buffer.from(signature, "base64url");
  if (expected.length !== received.length || !timingSafeEqual(expected, received)) return false;

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, "base64url").toString("utf8")) as SessionPayload;
    return Number.isFinite(payload.expiresAt) && payload.expiresAt > Date.now() && typeof payload.nonce === "string";
  } catch {
    return false;
  }
}

export function hasAdminSession(request: Request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const cookie = cookieHeader.split(";").map((item) => item.trim()).find((item) => item.startsWith(`${ADMIN_SESSION_COOKIE}=`));
  return verifyAdminSession(cookie?.slice(ADMIN_SESSION_COOKIE.length + 1));
}

export function isSameOriginRequest(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      return new URL(origin).origin === new URL(request.url).origin;
    } catch {
      return false;
    }
  }
  return request.headers.get("sec-fetch-site") === "same-origin";
}

export function passwordMatches(candidate: unknown) {
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedPassword || typeof candidate !== "string") return false;

  const expectedHash = createHash("sha256").update(expectedPassword).digest();
  const candidateHash = createHash("sha256").update(candidate).digest();
  return timingSafeEqual(expectedHash, candidateHash);
}
