import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, HeartHandshake, Users, Sprout, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { motion } from "framer-motion";
import bannerImg from "@/assets/About_section.png";
import storyImg from "@/assets/Second_image.png";
import heroImg from "@/assets/banner-family.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ohana Care Clinic Africa" },
      {
        name: "description",
        content:
          "Ohana Care Clinic Africa is a community-based healthcare provider on a mission to make quality care accessible to every African family. No one left behind.",
      },
      { property: "og:title", content: "About Us — Ohana Care Clinic Africa" },
      {
        property: "og:description",
        content:
          "Our story, mission, vision and values — accessible, community-focused healthcare for every family.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: HeartHandshake, title: "Compassion", desc: "We treat every patient with dignity, warmth and genuine human care." },
  { icon: ShieldCheck, title: "Reliability", desc: "Consistent, dependable healthcare families can count on." },
  { icon: Users, title: "Community", desc: "Care designed with and for the communities we serve." },
  { icon: Sprout, title: "Prevention", desc: "Keeping people well, not just treating illness." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Ohana Care"
        title="Healthcare rooted in community and compassion"
        description="We exist to remove the barriers that keep families from quality healthcare — building a future where no one is left behind."
        imageSrc={bannerImg}
        imageAlt="Healthcare provider speaking with a family"
      />

      {/* Story */}
      <section className="section-container py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src={storyImg}
                alt="An Ohana Care nurse with a family at home"
                width={1920}
                height={1080}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Born from a belief that care should reach everyone"
            />
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Ohana Care Clinic Africa was founded on a simple but powerful idea:
                that quality healthcare is a right, not a privilege. Across our
                communities, too many families face barriers of cost, distance and
                time when they need care most.
              </p>
              <p>
                We set out to change that — combining the institutional credibility of
                a trusted clinic with the warmth and accessibility of community-based
                care. From outpatient consultations and modern diagnostics to home
                healthcare and preventive wellness, we meet people where they are.
              </p>
              <p className="font-semibold text-primary">
                "Ohana" means family. And for us, every patient is family.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface py-16 md:py-24">
        <div className="section-container grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Target className="size-6" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-3 text-muted-foreground">
                To provide affordable and holistic healthcare through evidence-based medical treatment, nutritional therapy, lifestyle modification, and psychological care.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-warm text-accent-foreground">
                <Eye className="size-6" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-3 text-muted-foreground">
                A healthier Africa where every family — regardless of income or
                location — can access trusted, modern and human-centered healthcare
                whenever they need it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-container py-16 md:py-24">
        <Reveal>
          <SectionHeading eyebrow="Our Approach" title="How we deliver care" />
        </Reveal>
        <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { title: "Medical Treatment", desc: "Evidence-based diagnosis and clinical care." , icon: HeartHandshake},
            { title: "Nutrition Therapy", desc: "Personalised meal planning and dietary support.", icon: Sprout},
            { title: "Lifestyle Modification", desc: "Behaviour change, exercise and health coaching.", icon: Users},
            { title: "Psychological Support", desc: "Counselling and mental health care.", icon: Eye},
            { title: "Preventive Healthcare", desc: "Screening, immunisation and health education.", icon: ShieldCheck},
          ].map((a) => {
            const Icon = a.icon;
            return (
              <motion.div key={a.title} variants={staggerItem} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                <span className="mx-auto inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-primary"><Icon className="size-6" /></span>
                <h4 className="mt-4 text-lg font-bold text-foreground">{a.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
              </motion.div>
            );
          })}
        </Stagger>
      </section>

      {/* Family care */}
      <section className="bg-surface py-16 md:py-24">
        <div className="section-container">
          <Reveal>
            <SectionHeading eyebrow="Family Care" title="Care for every generation" description="Our services span pediatric to geriatric care so entire families can access coordinated, compassionate healthcare." />
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-container py-16 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Our Values"
            title="The principles that guide our care"
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={staggerItem}
              className="rounded-2xl border border-border bg-card p-7 text-center shadow-soft"
            >
              <span className="mx-auto inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <v.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>

      {/* Community commitment */}
      <section className="bg-surface py-16 md:py-24">
        <div className="section-container">
          <Reveal className="mx-auto max-w-3xl rounded-3xl bg-gradient-hero p-10 text-center text-primary-foreground shadow-glow md:p-14">
            <h2 className="text-3xl font-extrabold md:text-4xl">No One Left Behind</h2>
            <p className="mt-4 text-lg text-primary-foreground/85">
              Our community commitment is to keep widening access — through outreach,
              preventive programmes and home-based care — until quality healthcare
              truly reaches every family.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Join the Ohana family"
        description="Have questions about our care? Our team would love to hear from you."
      />
    </>
  );
}
