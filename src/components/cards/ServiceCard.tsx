import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerItem } from "@/components/motion/Reveal";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-card hover:border-primary/30"
    >
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-primary transition-transform duration-300 group-hover:scale-x-100" />
      <span className="inline-flex size-14 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="size-7" />
      </span>
      <h3 className="mt-5 text-xl font-bold text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm font-medium text-accent-orange">{service.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      <ul className="mt-5 space-y-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2 pt-2">
        <Button asChild variant="brand" size="sm">
          <Link to="/contact">{service.cta}</Link>
        </Button>
        <Button asChild variant="ghost" size="sm" className="text-primary">
          <Link to="/services/$slug" params={{ slug: service.slug }}>
            Learn more <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}