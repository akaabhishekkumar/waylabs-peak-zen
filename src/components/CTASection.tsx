import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 px-6 border-t border-border">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">
          // ready_to_ship?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Let's Build Something Fast
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          Whether you need a high-performance API, a production-grade web app, or a 
          complete infrastructure overhaul — we're ready.
        </p>
        <a href="https://calendar.app.google/rEwoiwLJN4Mu6GFd7" target="_blank" rel="noopener noreferrer">
          <Button variant="hero" size="lg" className="text-base px-8">
            Start a Conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
