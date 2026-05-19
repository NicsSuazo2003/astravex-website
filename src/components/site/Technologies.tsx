import { SectionHeader, FadeIn } from "./Section";

const stack = [
  "ASP.NET Core",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "TailwindCSS",
  "SignalR",
];

export function Technologies() {
  return (
    <section id="tech" className="py-24 bg-navy-gradient text-navy-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 size-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-80 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-widest text-primary-glow">Technology</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            A modern, production-tested stack
          </h2>
          <p className="mt-4 text-navy-foreground/70 leading-relaxed">
            We choose tools that scale with teams and survive in production.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {stack.map((t, i) => (
            <FadeIn key={t} delay={i * 0.04}>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center hover:bg-white/10 transition">
                <div className="text-sm font-medium">{t}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
