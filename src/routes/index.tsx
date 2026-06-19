import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Microscope,
  HousePlus,
  HeartPulse,
  HeartHandshake,
  Accessibility,
  Activity,
  Stethoscope,
  Sprout,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { WellnessCard } from "@/components/cards/WellnessCard";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { wellnessPackages } from "@/data/wellness";
import { locations } from "@/data/locations";
import heroImg from "@/assets/hero-care.jpg";
import bannerImg from "@/assets/banner-family.jpeg";
import homeCareImg from "@/assets/home-care.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ohana Care Clinic Africa — Healthcare Without Barriers" },
      {
        name: "description",
        content:
          "Accessible healthcare, diagnostics, wellness solutions and home-based care across African communities. No one left behind.",
      },
      { property: "og:title", content: "Ohana Care Clinic Africa — Healthcare Without Barriers" },
      {
        property: "og:description",
        content:
          "Accessible healthcare, diagnostics, wellness solutions and home-based care across African communities.",
      },
      { property: "og:url", content: "/" },
      { name: "keywords", content: "OHANA Care Clinic, Family Healthcare, Diabetes Care, Women's Health, Physiotherapy, Preventive Healthcare, Affordable Healthcare, Community Healthcare" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const trustStats = [
  { icon: ShieldCheck, value: 15, suffix: "+", label: "Experienced Medical Team" },
  { icon: Users, value: 50, suffix: "k+", label: "Community-Based Care" },
  { icon: Microscope, value: 40, suffix: "+", label: "Modern Diagnostics" },
  { icon: HousePlus, value: 1200, suffix: "+", label: "Home Healthcare Visits" },
  { icon: HeartPulse, value: 8, suffix: "+", label: "Wellness Programs" },
];

const whyChoose = [
  {
    icon: HeartHandshake,
    title: "Holistic Healthcare",
    desc: "Whole-person care combining medical, nutritional and psychological support.",
  },
  {
    icon: ShieldCheck,
    title: "Affordable Treatment",
    desc: "Care models designed to be affordable and reduce financial barriers.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    desc: "Every decision starts with you. Unhurried consultations and care plans built around your life.",
  },
  {
    icon: Sprout,
    title: "Preventive Healthcare",
    desc: "Screening, education and proactive programmes to keep families well.",
  },
  {
    icon: Users,
    title: "Family Care",
    desc: "Comprehensive services from pediatric to geriatric care for every family member.",
  },
  {
    icon: Stethoscope,
    title: "Integrated Nutrition & Lifestyle",
    desc: "Nutrition planning and lifestyle counselling embedded into care plans.",
  },
];

function Home() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="section-container grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground"
            >
              <Sprout className="size-4" /> No One Left Behind
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-4xl font-extrabold leading-[1.08] text-foreground md:text-6xl"
            >
              Healthcare <span className="text-primary">Without Barriers</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-xl text-lg text-muted-foreground"
            >
              Providing accessible healthcare, diagnostics, wellness solutions, and
              home-based care across African communities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild variant="brand" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/services">
                  Explore Services <ArrowRight className="size-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
            >
              {["Community-based", "Preventive care", "Home healthcare"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" /> {t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-glow">
              <img
                src={heroImg}
                alt="Caring Ohana Care doctor with an elderly patient in a bright clinic"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card md:-left-6"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-warm text-accent-foreground">
                <HeartHandshake className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-bold text-foreground">Caring & community-led</span>
                <span className="block text-xs text-muted-foreground">Trusted by families across Africa</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1.2 — TRUST MARQUEE */}
      <section className="overflow-hidden border-y border-border bg-card py-4" aria-label="Where you can find us">
        <div className="animate-marquee flex w-max items-center">
          {[0, 1].map((rep) => (
            <div
              key={rep}
              aria-hidden={rep === 1}
              className="flex shrink-0 items-center gap-10 pr-10 text-sm font-semibold text-muted-foreground"
            >
              {[...locations.map((l) => l.name), "Community-based care", "Preventive health programmes", "Home healthcare visits"].map(
                (item, i) => (
                  <span key={`${rep}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
                    <span className="size-1.5 rounded-full bg-accent" />
                    {item}
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </section>

        {/* SECTION 1.5 — COMPASSIONATE HEALTHCARE */}
        <section className="section-container py-12 md:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our Commitment"
              title="Compassionate Healthcare for Every Stage of Life"
              description="Our goal is to deliver holistic quality healthcare compassionately with a commitment that no one is left behind. We provide affordable, patient-centered healthcare through evidence-based medicine, nutritional therapy, lifestyle modification, and psychological support."
            />
          </Reveal>

          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Family Healthcare", icon: Users },
              { title: "Chronic Disease Management", icon: HeartPulse },
              { title: "Women's Health", icon: HeartHandshake },
              { title: "Adolescent Counseling", icon: Accessibility },
              { title: "Physiotherapy", icon: Activity },
              { title: "Home Care Services", icon: HousePlus },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} variants={staggerItem} className="hover-lift rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{/* kept intentionally brief to match design */}</p>
                </motion.div>
              );
            })}
          </Stagger>
        </section>

      {/* SECTION 2 — TRUST INDICATORS */}
      <section className="bg-primary/[0.03] py-14">
        <div className="section-container">
          <Stagger className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {trustStats.map((s) => (
              <motion.div
                key={s.label}
                variants={staggerItem}
                className="hover-lift flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <s.icon className="size-6" />
                </span>
                <span className="mt-4 text-3xl font-extrabold text-primary">
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SECTION 3 — CORE SERVICES */}
      <section className="section-container py-16 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive care, built around you"
            description="From everyday consultations to diagnostics, home care and wellness — quality healthcare for every stage of life."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </Stagger>
      </section>

      {/* SECTION 4 — FEATURED BANNER */}
      <section className="section-container pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl shadow-card">
          <img
            src={bannerImg}
            alt="A nurse caring for a multigenerational African family at home"
            width={1920}
            height={1080}
            loading="lazy"
            className="h-[26rem] w-full object-cover md:h-[30rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <Reveal className="max-w-xl px-6 md:px-12">
              <h2 className="text-3xl font-extrabold text-background md:text-4xl">
                Accessible Healthcare For Every Family
              </h2>
              <p className="mt-4 text-lg text-background/85">
                Wherever you are in your health journey, our care team is ready to walk
                alongside you and your loved ones.
              </p>
              <Button asChild variant="hero" size="xl" className="mt-7">
                <Link to="/contact">
                  Contact Our Care Team <ArrowRight className="size-5" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DOCTORS */}
      <section className="bg-surface py-16 md:py-24">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Doctors"
              title="Meet the team behind your care"
              description="Experienced, compassionate clinicians dedicated to keeping your family healthy."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.slice(0, 6).map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </Stagger>
          <Reveal className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/doctors">
                View All Doctors <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6 — WELLNESS PACKAGES */}
      <section className="section-container py-16 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Wellness Packages"
            title="Proactive health for every chapter of life"
            description="Each package brings together consultation, laboratory testing and screening into one clear programme."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wellnessPackages.slice(0, 3).map((p) => (
            <WellnessCard key={p.name} pkg={p} />
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/wellness-packages">
              See All Packages <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>

      {/* SECTION 7 — HOME CARE */}
      <section className="bg-surface py-16 md:py-24">
        <div className="section-container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src={homeCareImg}
                alt="Ohana Care nurse checking a patient's blood pressure at home"
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
              eyebrow="Home Care Services"
              title="Quality care, in the comfort of home"
              description="When getting to a clinic is hard, we come to you — with the same standard of professional, compassionate care."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Home Medical Visits",
                "Elderly Care",
                "Follow-Up Care",
                "Chronic Condition Monitoring",
              ].map((i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft"
                >
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
                    <CheckCircle2 className="size-5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{i}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="brand" size="lg" className="mt-8">
              <Link to="/home-care">
                Explore Home Care <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* SECTION 8 — WHY CHOOSE OHANA */}
      <section className="section-container py-16 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Ohana"
            title="A different kind of healthcare partner"
            description="Built on trust, accessibility and genuine community care."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w) => (
            <motion.div
              key={w.title}
              variants={staggerItem}
              className="hover-lift rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <w.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>

      {/* SECTION 9 — LOCATIONS */}
      <section className="bg-surface py-16 md:py-24">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Locations"
              title="Find care close to you"
              description="Conveniently located clinics serving communities with warmth and quality."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {locations.map((l) => (
              <motion.div
                key={l.name}
                variants={staggerItem}
                className="hover-lift flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <h3 className="text-lg font-bold text-foreground">{l.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{l.address}</p>
                <div className="mt-4 space-y-1.5 text-sm">
                  <p className="text-foreground/80"><span className="font-semibold text-primary">Phone:</span> {l.phone}</p>
                  <p className="text-foreground/80"><span className="font-semibold text-primary">Email:</span> {l.email}</p>
                  <p className="text-foreground/80"><span className="font-semibold text-primary">Hours:</span> {l.hours}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
          <Reveal className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/locations">
                View Locations & Map <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* SECTION 10 — TESTIMONIALS */}
      <section className="section-container py-16 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Stories from the families we serve"
            description="Real experiences from patients across our communities."
          />
        </Reveal>
        <Testimonials />
      </section>

      {/* SECTION 11 — FINAL CTA */}
      <CtaBanner
        title="Your Health Matters"
        description="Reach out today and let our care team support you and your family — no one left behind."
        buttonLabel="Contact Our Team"
      />
    </>
  );
}
