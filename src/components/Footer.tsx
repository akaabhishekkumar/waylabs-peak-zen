const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-semibold text-primary">Way</span>
          <span className="font-mono text-sm font-semibold text-foreground">Labs</span>
          <span className="font-mono text-xs text-muted-foreground ml-1">LLC</span>
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} WayLabs LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
