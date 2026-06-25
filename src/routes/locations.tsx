import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import locationImg from "@/assets/Location_section.png";
import { locations } from "@/data/locations";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Ohana Care Clinic Africa" },
      {
        name: "description",
        content:
          "Find an Ohana Care Clinic near you. View clinic addresses, phone numbers, email and opening hours across our communities.",
      },
      { property: "og:title", content: "Locations — Ohana Care Clinic Africa" },
      {
        property: "og:description",
        content: "Conveniently located clinics serving communities with warmth and quality care.",
      },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: Locations,
});

function Locations() {
  return (
    <>
      <PageHero
        eyebrow="Our Locations"
        title="Find care close to home"
        description="Our clinics are located within the heart of the communities we serve. Reach out to the location most convenient for you."
        imageSrc={locationImg}
        imageAlt="Clinic location and healthcare team"
      />

      <section className="section-container py-16 md:py-24">
        <Stagger className="grid gap-6 md:grid-cols-3">
          {locations.map((l) => (
            <motion.article
              key={l.name}
              variants={staggerItem}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <div
                className="flex h-40 items-center justify-center bg-secondary/60"
                role="img"
                aria-label={`Map location for ${l.name}`}
              >
                <div className="flex flex-col items-center text-primary">
                  <MapPin className="size-9" />
                  <span className="mt-2 text-xs font-semibold uppercase tracking-wide">Map placeholder</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-bold text-foreground">{l.name}</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-accent-orange" /> {l.address}
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="size-4 shrink-0 text-accent-orange" />
                    <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="hover:text-primary">{l.phone}</a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail className="size-4 shrink-0 text-accent-orange" />
                    <a href={`mailto:${l.email}`} className="hover:text-primary">{l.email}</a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Clock className="mt-0.5 size-4 shrink-0 text-accent-orange" /> {l.hours}
                  </li>
                </ul>
              </div>
            </motion.article>
          ))}
        </Stagger>

        <Reveal className="mt-12">
          <div
            className="flex h-72 items-center justify-center rounded-3xl border border-border bg-secondary/40"
            role="img"
            aria-label="Interactive map placeholder showing all Ohana Care clinic locations"
          >
            <div className="flex flex-col items-center text-primary">
              <MapPin className="size-12" />
              <span className="mt-3 text-sm font-semibold">Interactive map coming soon</span>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBanner
        title="Have a question about a clinic?"
        description="Our care team is happy to help you find the right location and service."
        buttonLabel="Contact Our Team"
      />
    </>
  );
}
