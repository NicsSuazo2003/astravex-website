import { useState } from "react";
import { SectionHeader } from "./Section";
import { Mail, Github, Facebook, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something durable"
            description="Tell us about your product, team, or operational challenge. We typically respond within one business day."
            align="left"
          />
          <div className="mt-8 space-y-3">
            <a href="mailto:hello@astravex.io" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition">
              <span className="size-9 rounded-lg bg-accent grid place-items-center"><Mail className="size-4 text-primary" /></span>
              hello@astravex.io
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition">
              <span className="size-9 rounded-lg bg-accent grid place-items-center"><Github className="size-4 text-primary" /></span>
              github.com/astravex
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition">
              <span className="size-9 rounded-lg bg-accent grid place-items-center"><Facebook className="size-4 text-primary" /></span>
              facebook.com/astravex
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" id="name" placeholder="Jane Cooper" />
            <Field label="Email" id="email" type="email" placeholder="jane@company.com" />
          </div>
          <Field label="Company" id="company" placeholder="Acme Health" className="mt-4" />
          <div className="mt-4">
            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              maxLength={1000}
              placeholder="Tell us about your project…"
              className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40 focus:border-ring transition"
            />
          </div>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy text-navy-foreground font-medium shadow-soft hover:translate-y-[-1px] transition"
          >
            {sent ? "Message sent" : "Send message"} <Send className="size-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, id, type = "text", placeholder, className = "",
}: { label: string; id: string; type?: string; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium text-foreground">{label}</label>
      <input
        id={id}
        type={type}
        required
        maxLength={200}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40 focus:border-ring transition"
      />
    </div>
  );
}
