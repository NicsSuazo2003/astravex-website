import { SectionHeader, FadeIn } from "./Section";

const projects = [
  { title: "Clinic Operations Dashboard", tag: "Healthcare", color: "from-primary/30 to-primary/10" },
  { title: "Realtime Queue Display", tag: "Queue System", color: "from-blue-400/30 to-primary/10" },
  { title: "Retail POS & Inventory", tag: "POS", color: "from-emerald-400/30 to-primary/10" },
  { title: "Revenue & Analytics", tag: "Analytics", color: "from-cyan-400/30 to-primary/10" },
];

function MockChart() {
  return (
    <svg viewBox="0 0 200 80" className="w-full h-full">
      <path d="M0,60 C30,40 50,55 80,30 C110,5 140,40 170,20 L200,15 L200,80 L0,80 Z" fill="oklch(0.68 0.13 195 / 0.25)" />
      <path d="M0,60 C30,40 50,55 80,30 C110,5 140,40 170,20 L200,15" stroke="oklch(0.55 0.15 200)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function MockBars() {
  return (
    <div className="flex items-end gap-1.5 h-full">
      {[40, 70, 55, 85, 60, 90, 75].map((h, i) => (
        <div key={i} className="flex-1 rounded-t bg-primary/40" style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}

function MockList() {
  return (
    <div className="space-y-1.5">
      {["A-104 • In Progress", "B-219 • Waiting", "A-105 • Waiting", "C-031 • Done"].map((r, i) => (
        <div key={i} className="flex items-center justify-between text-[10px] px-2 py-1.5 rounded bg-background border border-border">
          <span className="text-foreground">{r}</span>
          <span className={`size-1.5 rounded-full ${i === 0 ? "bg-primary" : i === 3 ? "bg-emerald-400" : "bg-muted-foreground/40"}`} />
        </div>
      ))}
    </div>
  );
}

function MockGrid() {
  return (
    <div className="grid grid-cols-3 gap-1.5 h-full">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="rounded bg-primary/15" />
      ))}
    </div>
  );
}

const mocks = [<MockChart />, <MockList />, <MockBars />, <MockGrid />];

export function Portfolio() {
  return (
    <section id="work" className="py-24 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Selected Work"
          title="Products shipping in the real world"
          description="A glimpse of the dashboards and operational tools we've built and continue to evolve."
        />
        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.06}>
              <div className="group rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-card transition">
                <div className={`h-44 p-5 bg-gradient-to-br ${p.color} relative`}>
                  <div className="absolute inset-5 rounded-xl bg-card/80 backdrop-blur p-3 shadow-soft">
                    {mocks[i]}
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between border-t border-border">
                  <div>
                    <div className="text-xs text-primary font-medium">{p.tag}</div>
                    <h3 className="mt-1 font-semibold text-foreground">{p.title}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground">Case study →</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
