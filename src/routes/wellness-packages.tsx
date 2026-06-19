import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { WellnessCard } from "@/components/cards/WellnessCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { wellnessPackages } from "@/data/wellness";

export const Route = createFileRoute("/wellness-packages")({
  head: () => ({
    meta: [
      { title: "Wellness Packages — Ohana Care Clinic Africa" },
      {
        name: "description",
        content:
          "Preventive wellness packages combining consultation, laboratory testing and screening: Executive, Women's, Men's, Family and Corporate Wellness.",
      },
      { property: "og:title", content: "Wellness Packages — Ohana Care Clinic Africa" },
      {
        property: "og:description",
        content: "Proactive, preventive health programmes for every chapter of life.",
      },
      { property: "og:url", content: "/wellness-packages" },
    ],
    links: [{ rel: "canonical", href: "/wellness-packages" }],
  }),
  component: Wellness,
});

function Wellness() {
  return (
    <>
      <PageHero
        eyebrow="Wellness Packages"
        title="Invest in staying well"
        description="Comprehensive, preventive health packages that bring consultation, laboratory testing and screening together in one clear programme."
      />

      <section className="section-container py-16 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Choose your package"
            title="Tailored wellness for every life stage"
            description="Each package includes consultation, laboratory testing and screening services, with follow-up guidance to keep you on track."
          />
        </Reveal>
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wellnessPackages.map((p) => (
            <WellnessCard key={p.name} pkg={p} />
          ))}
        </Stagger>
      </section>

      <CtaBanner
        title="Ready to prioritise your health?"
        description="Speak to our team to choose the wellness package that fits you and your family."
        buttonLabel="Contact Our Team"
      />
    </>
  );
}
