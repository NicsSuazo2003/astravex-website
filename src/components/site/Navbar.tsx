import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#tech", label: "Technology" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="size-8 rounded-lg bg-primary-gradient shadow-glow grid place-items-center">
            <div className="size-3 rounded-sm bg-background/90" />
          </div>
          <span className="font-semibold tracking-tight text-foreground">
            Astravex<span className="text-muted-foreground font-normal"> Systems</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-navy text-navy-foreground hover:opacity-90 transition shadow-soft"
          >
            Get in touch
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 text-sm font-medium rounded-lg bg-navy text-navy-foreground text-center"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
