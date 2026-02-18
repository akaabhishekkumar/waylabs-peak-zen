import { Zap, Server, DollarSign, Code2, ArrowRight, Globe, Smartphone } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Peak Performance",
    description: "Sub-millisecond response times. We profile, benchmark, and optimize every critical path until your app flies.",
  },
  {
    icon: Server,
    title: "Zero Bottlenecks",
    description: "Concurrent Go routines, efficient memory allocation, and smart caching — your backend scales without breaking a sweat.",
  },
  {
    icon: DollarSign,
    title: "Lower Infra Costs",
    description: "Open-source stacks, custom-built tooling, and lean architecture. We cut your cloud bill without cutting corners.",
  },
  {
    icon: Code2,
    title: "Open Source First",
    description: "We contribute to and build on open-source foundations. No vendor lock-in, full transparency, total control.",
  },
];

const PillarsSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">
            // core_principles
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Engineered for Efficiency
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group relative rounded-lg border border-border bg-card p-8 transition-all hover:border-glow hover:glow-box"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
