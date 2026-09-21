export default function ParallaxDivider() {
  return (
    <section 
      className="h-[300px] md:h-[450px] w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/styles/modern.jpg')" }}
    />
  );
}
