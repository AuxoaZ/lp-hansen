export default function ArticleBody({ body }: { body: string }) {
  const blocks = body.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);

  return (
    <div className="space-y-6 text-base leading-8 text-slate-200 md:text-lg">
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return <h2 key={index} className="pt-4 text-3xl font-serif font-semibold text-white">{block.slice(3)}</h2>;
        }
        if (block.startsWith("### ")) {
          return <h3 key={index} className="pt-2 text-2xl font-serif font-semibold text-white">{block.slice(4)}</h3>;
        }
        if (block.split("\n").every((line) => line.startsWith("- "))) {
          return <ul key={index} className="list-disc space-y-2 pl-6">{block.split("\n").map((line, itemIndex) => <li key={itemIndex}>{line.slice(2)}</li>)}</ul>;
        }
        return <p key={index} className="whitespace-pre-line">{block}</p>;
      })}
    </div>
  );
}
