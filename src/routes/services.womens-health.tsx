import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/womens-health")({
  head: () => ({
    meta: [
      { title: "Women's Health — Ohana Care Clinic Africa" },
      {
        name: "description",
        content:
          "Women's health services including gynecology, family planning, antenatal and postnatal care and cancer screening.",
      },
      { name: "keywords", content: "OHANA Care Clinic, Women's Health, Family Healthcare, Antenatal Care, Postnatal Care, Preventive Healthcare" },
      { property: "og:title", content: "Women's Health — Ohana Care Clinic Africa" },
      { property: "og:description", content: "Comprehensive women's health and maternal services." },
      { property: "og:url", content: "/services/womens-health" },
    ],
    links: [{ rel: "canonical", href: "/services/womens-health" }],
  }),
  component: WomensHealth,
});

function WomensHealth() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Women's Health"
        description="Comprehensive gynecology, family planning, antenatal and postnatal care, and cancer screening services."
      />

      <section className="section-container py-16 md:py-24">
        <Reveal>
          <h2 className="text-2xl font-bold text-foreground">Women's Health Services</h2>
          <p className="mt-4 text-muted-foreground">
            We provide integrated care for women's reproductive and maternal health, screening and follow-up services.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Gynecology",
              "Family Planning",
              "Antenatal Care",
              "Postnatal Care",
              "Cancer Screening",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                <span className="inline-flex size-8 items-center justify-center rounded-lg bg-secondary text-primary" />
                <span className="text-sm font-medium text-foreground">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button asChild variant="brand" size="lg">
              <Link to="/contact">Request Appointment <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <CtaBanner title="Your Health Matters" description="Reach out and our women's health team will support you." />
    </>
  );
}