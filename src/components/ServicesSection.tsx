import { Globe, Smartphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "High-performance web apps built with modern frameworks and Go backends that handle millions of requests efficiently.",
    tags: ["React", "Go", "PostgreSQL", "Redis"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Cross-Platform",
    description: "Native-feeling apps with shared business logic, optimized APIs, and minimal battery & data consumption.",
    tags: ["React Native", "Go APIs", "gRPC", "WebSocket"],
  },
];

const portfolio = [
  {
    title: "RewardExpress",
    description: "A rewards and loyalty app for Android & iOS, engineered for massive throughput. Our Go backend handles over 10K requests/sec on a single 4-core CPU while delivering a smooth native experience.",
    tags: ["Android", "iOS", "Go Backend", "High Throughput"],
    highlight: "10K+ req/s on 4 vCPUs",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 px-6 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">
            // services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What We Build
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-lg border border-border bg-card p-8 transition-all hover:border-glow hover:glow-box"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio / Our Work */}
        <div className="mt-20 text-center mb-12">
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">
            // our_work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What We've Built
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-lg border border-border bg-card p-8 transition-all hover:border-glow hover:glow-box"
            >
              {project.highlight && (
                <div className="inline-flex items-center font-mono text-xs text-primary border border-primary/20 rounded-full px-3 py-1 mb-4 bg-primary/5">
                  ⚡ {project.highlight}
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
