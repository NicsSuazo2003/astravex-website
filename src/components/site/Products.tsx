import { SectionHeader, FadeIn } from "./Section";
import { Stethoscope, Store, ListOrdered, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Stethoscope,
    name: "ClinicFlow",
    desc: "Modern clinic management platform with appointments, queues, billing, and patient records.",
    tech: ["ASP.NET Core", "React", "PostgreSQL", "SignalR"],
  },
  {
    icon: Store,
    name: "StoreFlow POS",
    desc: "Point-of-sale and inventory management platform for retail businesses.",
    tech: ["ASP.NET Core", "React", "PostgreSQL", "Docker"],
  },
  {
    icon: ListOrdered,
    name: "QueueFlow",
    desc: "Realtime queue management system for clinics and service businesses.",
    tech: ["SignalR", "React", "TypeScript", "PostgreSQL"],
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Products"
          title="SaaS platforms in production"
          description="Battle-tested products serving clinics, retailers, and service businesses."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card transition relative overflow-hidden">
                <div className="absolute -top-16 -right-16 size-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                <div className="size-11 rounded-xl bg-primary-gradient grid place-items-center shadow-glow">
                  <p.icon className="size-5 text-navy" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-md border border-border bg-background text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <button className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition">
                  Learn more <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition" />
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
