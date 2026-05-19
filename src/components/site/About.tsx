import { SectionHeader, FadeIn } from "./Section";
import { Building2, HeartPulse, Layers, ShieldCheck } from "lucide-react";

const points = [
  { icon: HeartPulse, title: "Healthcare-first", desc: "Deep focus on clinic, queue, and patient workflows." },
  { icon: Layers, title: "SaaS products", desc: "Multi-tenant platforms built for operational scale." },
  { icon: Building2, title: "Operational software", desc: "POS, inventory, scheduling, and back-office tools." },
  { icon: ShieldCheck, title: "Enterprise architecture", desc: "Hardened, observable, and built to last." },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="About Astravex"
          title="A modern software company building durable systems"
          description="Astravex Systems designs and ships scalable products for clinics, retailers, and modern enterprises — combining product craft with enterprise-grade engineering."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {points.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition">
                <div className="size-10 rounded-lg bg-accent grid place-items-center">
                  <p.icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
