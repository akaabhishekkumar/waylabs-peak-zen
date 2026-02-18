import { Terminal } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-14 px-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-primary" />
          <span className="font-mono text-sm font-bold text-primary">Way</span>
          <span className="font-mono text-sm font-bold text-foreground">Labs</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Approach", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
