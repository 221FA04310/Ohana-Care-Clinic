import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, Stagger } from "@/components/motion/Reveal";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { doctors, specializations } from "@/data/doctors";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Ohana Care Clinic Africa" },
      {
        name: "description",
        content:
          "Meet the experienced, compassionate clinicians at Ohana Care Clinic Africa. Search and filter our doctors by specialization.",
      },
      { property: "og:title", content: "Our Doctors — Ohana Care Clinic Africa" },
      {
        property: "og:description",
        content: "Browse our professional directory of caring, experienced doctors.",
      },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: Doctors,
});

function Doctors() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All Specializations");

  const filtered = useMemo(() => {
    return doctors.filter((d) => {
      const matchesFilter = filter === "All Specializations" || d.category === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.specialization.toLowerCase().includes(q) ||
        d.expertise.some((e) => e.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  return (
    <>
      <PageHero
        eyebrow="Our Doctors"
        title="Caring clinicians, dedicated to your family"
        description="Browse our team of experienced doctors across general practice, family medicine, women's health, paediatrics and more."
      />

      <section className="section-container py-12 md:py-16">
        <Reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or specialty"
                className="pl-9"
                aria-label="Search doctors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {specializations.map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                    filter === s
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-primary",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {filtered.length > 0 ? (
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </Stagger>
        ) : (
          <p className="mt-16 text-center text-muted-foreground">
            No doctors match your search. Try a different name or specialty.
          </p>
        )}
      </section>

      <CtaBanner
        title="Need help choosing a doctor?"
        description="Our care team can match you with the right clinician for your needs."
        buttonLabel="Contact Our Team"
      />
    </>
  );
}
