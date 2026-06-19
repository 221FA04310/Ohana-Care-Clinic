import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services, getService } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const service = loaderData ? getService(loaderData.slug) : undefined;
    const title = service ? `${service.title} — Ohana Care Clinic Africa` : "Service — Ohana Care";
    const desc = service?.description ?? "Ohana Care Clinic Africa service.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/services/${loaderData?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/services/${loaderData?.slug ?? ""}` }],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="section-container py-24 text-center">
      <h1 className="text-2xl font-bold text-foreground">Service not found</h1>
      <Button asChild variant="brand" className="mt-6">
        <Link to="/services">Back to Services</Link>
      </Button>
    </div>
  ),
});

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const service = getService(slug)!;
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.tagline} />

      <section className="section-container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
              <Icon className="size-8" />
            </span>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{service.description}</p>

            <h2 className="mt-10 text-xl font-bold text-foreground">What's included</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft"
                >
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{f}</span>
                </li>
              ))}
            </ul>

            {service.note && (
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-5">
                <Info className="mt-0.5 size-5 shrink-0 text-accent-orange" />
                <p className="text-sm text-foreground/80">{service.note}</p>
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="sticky top-24 rounded-3xl border border-border bg-card p-8 shadow-card">
              <h3 className="text-xl font-bold text-foreground">{service.cta}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                All appointment requests are handled personally by our care team
                through our contact channels — no online booking needed.
              </p>
              <Button asChild variant="brand" size="lg" className="mt-6 w-full">
                <Link to="/contact">{service.cta}</Link>
              </Button>
              <Button asChild variant="ghost" className="mt-2 w-full text-primary">
                <Link to="/services">
                  <ArrowLeft className="size-4" /> All Services
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="section-container">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Related services</h2>
            <Button asChild variant="ghost" className="text-primary">
              <Link to="/services">
                View all <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Your Health Matters" />
    </>
  );
}
