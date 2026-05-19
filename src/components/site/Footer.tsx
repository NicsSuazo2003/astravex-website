import { Github, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-primary-gradient shadow-glow grid place-items-center">
              <div className="size-3 rounded-sm bg-background/90" />
            </div>
            <span className="font-semibold tracking-tight text-foreground">Astravex Systems</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Building modern software systems for clinics, businesses, and modern enterprises.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground transition">About</a></li>
            <li><a href="#products" className="hover:text-foreground transition">Products</a></li>
            <li><a href="#services" className="hover:text-foreground transition">Services</a></li>
            <li><a href="#contact" className="hover:text-foreground transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Connect</div>
          <div className="mt-3 flex items-center gap-2">
            <a href="mailto:hello@astravex.io" className="size-9 rounded-lg border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:bg-secondary transition"><Mail className="size-4" /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="size-9 rounded-lg border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:bg-secondary transition"><Github className="size-4" /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="size-9 rounded-lg border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:bg-secondary transition"><Facebook className="size-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Astravex Systems. All rights reserved.</span>
          <span>Building Modern Software Systems</span>
        </div>
      </div>
    </footer>
  );
}
