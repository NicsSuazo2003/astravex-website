import { SectionHeader, FadeIn } from "./Section";
import { Code2, Cloud, Workflow, HeartPulse, Globe, Plug } from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "Tailored applications engineered around your domain and workflows." },
  { icon: Cloud, title: "SaaS Development", desc: "Multi-tenant platforms with billing, auth, and operational tooling." },
  { icon: Workflow, title: "Business Process Automation", desc: "Replace manual operations with reliable, auditable systems." },
  { icon: HeartPulse, title: "Healthcare Systems", desc: "Clinic, queue, and patient platforms built for compliance and scale." },
  { icon: Globe, title: "Web Applications", desc: "Modern, accessible web apps with realtime collaboration." },
  { icon: Plug, title: "API Development", desc: "Versioned, documented APIs your teams and partners can rely on." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Services"
          title="From product strategy to production"
          description="We partner with teams to design, build, and operate software that matters."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition">
                <s.icon className="size-5 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
