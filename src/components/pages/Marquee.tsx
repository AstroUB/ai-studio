export function Marquee() {
  const items = ["Salesforce", "Notion", "Stripe", "Linear", "Snowflake", "Anthropic", "OpenAI", "Vercel", "HubSpot", "Slack"];
  return (
    <section className="border-y border-hairline py-8">
      <div className="flex items-center gap-10 overflow-hidden">
        <div className="marquee-track">
          {[...items, ...items].map((b, i) => (
            <span key={i} className="font-display text-2xl text-foreground/40 md:text-3xl">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}