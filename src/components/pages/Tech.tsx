export function Tech() {
  const stack = ["OpenAI", "Anthropic", "Google Vertex", "Mistral", "LangGraph", "Temporal", "Pinecone", "pgvector", "Snowflake", "Databricks", "Vercel", "Cloudflare"];
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="eyebrow text-muted-foreground">(07) Stack</span>
          <h2 className="display-md mt-4">Model-agnostic.<br />Infra-native.</h2>
          <p className="mt-6 max-w-sm text-muted-foreground">We bring our opinions on architecture and stay neutral on vendors. Swap models, swap stores, keep the agent.</p>
        </div>
        <div className="md:col-span-8">
          <div className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <span key={s} className="pill" data-cursor="hover">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
