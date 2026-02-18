import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 grid-bg overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background pointer-events-none" />
      
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-primary border border-primary/20 rounded-full px-4 py-1.5 mb-8 bg-primary/5">
          <Terminal className="h-3 w-3" />
          <span>go run waylabs.go --optimize</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
          Peak Performance.
          <br />
          <span className="text-gradient-primary">Minimal Cost.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          WayLabs LLC builds apps and websites engineered for maximum throughput, 
          zero bottlenecks, and dramatically lower infrastructure costs — powered by 
          Go and open-source innovation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8">
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8">
            View Our Work
          </Button>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "10x", label: "Faster APIs" },
            { value: "70%", label: "Cost Reduction" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gradient-primary font-mono">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
