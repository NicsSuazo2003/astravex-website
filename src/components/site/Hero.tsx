import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity, Users, CreditCard } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur text-xs font-medium text-muted-foreground shadow-soft">
            <Sparkles className="size-3.5 text-primary" />
            Now shipping clinic & operational platforms
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gradient leading-[1.05]">
            Modern Software Solutions
            <br /> for Growing Businesses
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We build scalable clinic systems, operational platforms, and
            enterprise-grade SaaS applications — engineered with modern web
            technology and built to scale.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy text-navy-foreground font-medium shadow-soft hover:translate-y-[-1px] transition"
            >
              View Products <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-foreground font-medium shadow-soft hover:bg-secondary transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-16 max-w-5xl mx-auto"
        >
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[2rem] pointer-events-none" />
          <div className="relative rounded-2xl border border-border bg-card shadow-card overflow-hidden">
            <div className="h-9 px-4 flex items-center gap-1.5 border-b border-border bg-secondary/60">
              <span className="size-2.5 rounded-full bg-destructive/60" />
              <span className="size-2.5 rounded-full bg-yellow-400/70" />
              <span className="size-2.5 rounded-full bg-primary/70" />
              <span className="ml-4 text-xs text-muted-foreground">app.astravex.io / dashboard</span>
            </div>
            <div className="grid grid-cols-12 gap-0">
              <aside className="col-span-3 hidden md:flex flex-col p-4 border-r border-border bg-secondary/30 min-h-[360px]">
                <div className="h-6 w-24 rounded bg-foreground/10 mb-4" />
                {["Overview","Patients","Appointments","Billing","Analytics"].map((s,i)=>(
                  <div key={s} className={`text-xs px-3 py-2 rounded-lg mb-1 ${i===0 ? "bg-primary/15 text-foreground" : "text-muted-foreground"}`}>{s}</div>
                ))}
              </aside>
              <div className="col-span-12 md:col-span-9 p-5">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Users, label: "Patients", val: "1,284", delta: "+12%" },
                    { icon: Activity, label: "Visits Today", val: "87", delta: "+4%" },
                    { icon: CreditCard, label: "Revenue", val: "$24.6k", delta: "+18%" },
                  ].map((s)=>(
                    <div key={s.label} className="rounded-xl border border-border p-3 bg-background">
                      <div className="flex items-center justify-between">
                        <s.icon className="size-4 text-primary" />
                        <span className="text-[10px] text-primary font-medium">{s.delta}</span>
                      </div>
                      <div className="mt-2 text-lg font-semibold text-foreground">{s.val}</div>
                      <div className="text-[11px] text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-border p-4 bg-background h-44 relative overflow-hidden">
                  <div className="text-xs text-muted-foreground mb-2">Weekly visits</div>
                  <svg viewBox="0 0 400 120" className="w-full h-28">
                    <defs>
                      <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.68 0.13 195)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="oklch(0.68 0.13 195)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,90 C40,60 80,80 120,55 C160,30 200,70 240,45 C280,20 320,50 360,30 L400,25 L400,120 L0,120 Z" fill="url(#g)" />
                    <path d="M0,90 C40,60 80,80 120,55 C160,30 200,70 240,45 C280,20 320,50 360,30 L400,25" fill="none" stroke="oklch(0.55 0.15 200)" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust strip */}
        <div className="mt-14 text-center text-xs uppercase tracking-widest text-muted-foreground">
          Built with enterprise-grade architecture
        </div>
      </div>
    </section>
  );
}
