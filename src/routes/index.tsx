import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Services } from "@/components/site/Services";
import { Technologies } from "@/components/site/Technologies";
import { WhyUs } from "@/components/site/WhyUs";
import { Portfolio } from "@/components/site/Portfolio";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astravex Systems — Building Modern Software Systems" },
      {
        name: "description",
        content:
          "Astravex Systems builds scalable clinic, operational, and enterprise SaaS platforms with modern web technology.",
      },
      { property: "og:title", content: "Astravex Systems — Building Modern Software Systems" },
      {
        property: "og:description",
        content:
          "Scalable software solutions for clinics, businesses, and modern enterprises.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <Technologies />
      <WhyUs />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
