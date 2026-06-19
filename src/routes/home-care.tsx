import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Home as HomeIcon,
  HeartPulse,
  Activity,
  CalendarCheck,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CtaBanner } from "@/components/sections/CtaBanner";
import homeCareImg from "@/assets/home-care.jpg";

export const Route = createFileRoute("/home-care")({
  head: () => ({
    meta: [
      { title: "Home Care Services — Ohana Care Clinic Africa" },
      {
        name: "description",
        content:
          "Professional, compassionate home healthcare: home medical visits, elderly care, recovery support and chronic condition monitoring.",
      },
      { name: "keywords", content: "OHANA Care Clinic, Home Care, Physiotherapy, Chronic Disease Monitoring, Affordable Healthcare" },
      { property: "og:title", content: "Home Care Services — Ohana Care Clinic Africa" },
      {
        property: "og:description",
        content: "Quality medical care delivered in the comfort of your home.",
      },
      { property: "og:url", content: "/home-care" },
    ],
    links: [{ rel: "canonical", href: "/home-care" }],
  }),
  component: HomeCare,
});

const offerings = [
  { icon: HomeIcon, title: "Home Medical Visits", desc: "Doctor and nurse visits for assessment, treatment and care, at your doorstep." },
  { icon: HeartPulse, title: "Elderly Care", desc: "Dignified, attentive support tailored to the needs of older family members." },
  { icon: CalendarCheck, title: "Recovery Support", desc: "Post-illness and post-procedure care that helps you heal safely at home." },
  { icon: Activity, title: "Chronic Disease Monitoring", desc: "Diabetes and hypertension monitoring, medication reviews and lifestyle guidance delivered at home." },
  { icon: Activity, title: "Physiotherapy Home Care", desc: "Post-surgery rehabilitation, mobility restoration, strength recovery and pain management in the home setting." },
];

const benefits = [
  { icon: ShieldCheck, title: "Clinical quality", desc: "Same trusted standards as our clinics — in your home." },
  { icon: Clock, title: "Less travel & waiting", desc: "Care that fits your schedule and reduces strain on patients." },
  { icon: HeartPulse, title: "Comfort & dignity", desc: "Healing in familiar surroundings, surrounded by loved ones." },
];

function HomeCare() {
  return (
    <>
      <PageHero
        eyebrow="Home Care Services"
        title="Bringing quality healthcare to your doorstep"
        description="When getting to a clinic is difficult, our care team comes to you — with the same professional, compassionate standard of care."
      >
        <Button asChild variant="hero" size="xl">
          <Link to="/contact">
            Request Appointment <ArrowRight className="size-5" />
          </Link>
        </Button>
      </PageHero>

      <section className="section-container py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src={homeCareImg}
                alt="Ohana Care nurse taking a patient's blood pressure at home"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="What we offer"
              title="Comprehensive care, wherever you call home"
              description="Our home care programme is designed to support patients and families through every stage of care."
            />
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((o) => (
            <motion.div
              key={o.title}
              variants={staggerItem}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <o.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="section-container">
          <Reveal>
            <SectionHeading eyebrow="Why home care" title="Care that comes to you, without compromise" />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-card p-7 text-center shadow-soft"
              >
                <span className="mx-auto inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <b.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner
        title="Bring care home today"
        description="Talk to our team about arranging home healthcare for your loved ones."
        buttonLabel="Contact Our Team"
      />
    </>
  );
}
