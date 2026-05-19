import { SectionHeader, FadeIn } from "./Section";
import { Layers3, ShieldCheck, Zap, Sparkles, CloudCog, Gauge } from "lucide-react";

const items = [
  { icon: Layers3, title: "Scalable Architecture", desc: "Modular systems designed to grow from MVP to enterprise." },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "Auth, RBAC, audit trails, and defense in depth by default." },
  { icon: Zap, title: "Realtime Systems", desc: "Live queues, dashboards, and collaborative UIs with SignalR." },
  { icon: Sparkles, title: "Modern UI/UX", desc: "Polished, accessible interfaces your users actually enjoy." },
  { icon: CloudCog, title: "Cloud Ready", desc: "Containerized, observable, and deployable anywhere." },
  { icon: Gauge, title: "Performance Focused", desc: "Engineered for snappy responses and high concurrency." },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Astravex"
          title="Engineered for teams that ship"
          description="Every project is built on the same foundations we use in our own SaaS products."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.04}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card transition relative overflow-hidden">
                <div className="size-10 rounded-lg bg-accent grid place-items-center group-hover:bg-primary/20 transition">
                  <it.icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{it.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
