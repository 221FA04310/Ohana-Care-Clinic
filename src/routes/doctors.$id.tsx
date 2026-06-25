import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Award, BriefcaseMedical, GraduationCap, Check, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { doctors } from "@/data/doctors";
import heroImg from "@/assets/hero-care.jpg";


export const Route = createFileRoute("/doctors/$id")({
  loader: ({ params }) => {
    const doctor = doctors.find((d) => d.id === params.id);
    if (!doctor) throw notFound();
    return { id: params.id };
  },
  head: ({ loaderData }) => {
    const doctor = doctors.find((d) => d.id === loaderData?.id);
    const title = doctor ? `${doctor.name} — ${doctor.specialization} | Ohana Care` : "Doctor — Ohana Care";
    const desc = doctor?.summary ?? "Ohana Care Clinic Africa doctor profile.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/doctors/${loaderData?.id ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/doctors/${loaderData?.id ?? ""}` }],
    };
  },
  component: DoctorProfile,
  notFoundComponent: () => (
    <div className="section-container py-24 text-center">
      <h1 className="text-2xl font-bold text-foreground">Doctor not found</h1>
      <Button asChild variant="brand" className="mt-6">
        <Link to="/doctors">Back to Doctors</Link>
      </Button>
    </div>
  ),
});

function DoctorProfile() {
  const { id } = Route.useLoaderData();
  const doctor = doctors.find((d) => d.id === id)!;

  const facts = [
    { icon: GraduationCap, label: "Qualification", value: doctor.qualification },
    { icon: BriefcaseMedical, label: "Experience", value: `${doctor.experience}+ years` },
    { icon: Stethoscope, label: "Specialization", value: doctor.specialization },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-primary-foreground md:py-20">
        <div className="absolute -right-24 -top-24 size-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="section-container relative flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:text-left">
          <span className="flex size-32 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15 text-4xl font-extrabold ring-4 ring-primary-foreground/20">
            {doctor.initials}
          </span>
          <div>
            <Button asChild variant="outline-light" size="sm" className="mb-4">
              <Link to="/doctors">
                <ArrowLeft className="size-4" /> All Doctors
              </Link>
            </Button>
            <h1 className="text-3xl font-extrabold md:text-4xl">{doctor.name}</h1>
            <p className="mt-2 text-lg font-semibold text-primary-foreground/90">{doctor.specialization}</p>
            <p className="mt-1 inline-flex items-center gap-2 text-primary-foreground/80">
              <Award className="size-4" /> {doctor.experience}+ years of experience
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{doctor.intro}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{doctor.summary}</p>

            <h2 className="mt-10 text-2xl font-bold text-foreground">Areas of expertise</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {doctor.expertise.map((e) => (
                <li
                  key={e}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft"
                >
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{e}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-6">
              <div className="overflow-hidden rounded-3xl border border-border shadow-card">
                <img
                  src={heroImg}
                  alt="Doctor talking with a patient"
                  className="h-72 w-full object-cover"
                />
              </div>
              <div className="sticky top-24 space-y-6">
                <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
                  <h3 className="text-lg font-bold text-foreground">At a glance</h3>
                  <ul className="mt-5 space-y-4">
                    {facts.map((f) => (
                      <li key={f.label} className="flex items-start gap-3">
                        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                          <f.icon className="size-4" />
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-wide text-muted-foreground">{f.label}</span>
                          <span className="block text-sm font-semibold text-foreground">{f.value}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl bg-gradient-primary p-7 text-primary-foreground shadow-glow">
                  <h3 className="text-lg font-bold">Book with {doctor.name.split(" ")[1]}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/85">
                    Appointment requests are handled by our care team through our contact channels.
                  </p>
                  <Button asChild variant="hero" className="mt-5 w-full">
                    <Link to="/contact">Request Appointment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner title="Your Health Matters" />
    </>
  );
}
