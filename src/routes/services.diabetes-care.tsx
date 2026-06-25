import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/diabetes-care")({
  head: () => ({
    meta: [
      { title: "Diabetes Care — Ohana Care Clinic Africa" },
      {
        name: "description",
        content:
          "Comprehensive diabetes care: specialist consultations, kidney and foot care, nutrition planning and lifestyle counselling.",
      },
      { name: "keywords", content: "OHANA Care Clinic, Diabetes Care, Family Healthcare, Preventive Healthcare, Affordable Healthcare" },
      { property: "og:title", content: "Diabetes Care — Ohana Care Clinic Africa" },
      { property: "og:description", content: "Comprehensive diabetes management and support." },
      { property: "og:url", content: "/services/diabetes-care" },
    ],
    links: [{ rel: "canonical", href: "/services/diabetes-care" }],
  }),
  component: DiabetesCare,
});

function DiabetesCare() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Diabetes Care"
        description="Comprehensive diabetes management, kidney and foot care, nutrition support and lifestyle counselling."
      />

      <section className="section-container py-16 md:py-24">
        <Reveal>
          <h2 className="text-2xl font-bold text-foreground">Diabetes Care Services</h2>
          <p className="mt-4 text-muted-foreground">
            Our diabetes clinic provides specialist-led care for people living with diabetes, focusing on long-term control, complication prevention and patient education.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Diabetes Mellitus Management",
              "Diabetic Kidney Disease Care",
              "Diabetic Foot Care",
              "Nutrition Support",
              "Lifestyle Counselling",
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

      <CtaBanner title="Your Health Matters" description="Reach out and our diabetes care team will support you." />
    </>
  );
}
