import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import heroImg from "@/assets/Services_section.png";
import { services } from "@/data/services";
import {
  Heart,
  Pill,
  Wind,
  Cloud,
  AlertCircle,
  AlertTriangle,
  Bone,
  Zap,
  Droplets,
  Activity,
  Brain,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ohana Care Clinic Africa" },
      {
        name: "description",
        content:
          "Explore Ohana Care services: outpatient care, teleconsultation awareness, laboratory testing, home care services and wellness packages.",
      },
      { name: "keywords", content: "OHANA Care Clinic, Family Healthcare, Diabetes Care, Women's Health, Physiotherapy, Preventive Healthcare, Affordable Healthcare, Community Healthcare" },
      { property: "og:title", content: "Services — Ohana Care Clinic Africa" },
      {
        property: "og:description",
        content:
          "Outpatient care, diagnostics, home healthcare and wellness packages for every family.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  const conditions = [
    { name: "Hypertension", icon: Heart },
    { name: "Diabetes", icon: Pill },
    { name: "Asthma", icon: Wind },
    { name: "COPD", icon: Cloud },
    { name: "Allergies", icon: AlertCircle },
    { name: "Migraine", icon: AlertTriangle },
    { name: "Arthritis", icon: Bone },
    { name: "Gastric Disorders", icon: Zap },
    { name: "Liver Disorders", icon: Droplets },
    { name: "Musculoskeletal Conditions", icon: Activity },
    { name: "Neurological Conditions", icon: Brain },
  ];

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete care under one trusted roof"
        description="From everyday consultations and diagnostics to home care and preventive wellness — explore how Ohana Care supports your family's health."
        imageSrc={heroImg}
        imageAlt="Ohana Care doctor assisting patient in clinic"
      />
      <section className="section-container py-16 md:py-24">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </Stagger>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="section-container">
          <Reveal>
            <SectionHeading eyebrow="Conditions" title="Conditions We Treat" description="Common conditions managed by our care teams." />
          </Reveal>
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {conditions.map(({ name, icon: ConditionIcon }) => (
              <motion.div key={name} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
                  <ConditionIcon className="size-5" />
                </span>
                <span className="text-sm font-medium text-foreground">{name}</span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
      <CtaBanner
        title="Not sure where to start?"
        description="Speak to our care team and we'll guide you to the right service for your needs."
        buttonLabel="Contact Our Team"
      />
    </>
  );
}
