import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import type { WellnessPackage } from "@/data/wellness";

export function WellnessCard({ pkg }: { pkg: WellnessPackage }) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-card",
        pkg.highlight ? "border-primary ring-1 ring-primary/30" : "border-border hover:border-primary/30",
      )}
    >
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 rounded-t-2xl bg-gradient-warm transition-transform duration-300 group-hover:scale-x-100" />
      {pkg.highlight && (
        <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-gradient-warm px-3 py-1 text-xs font-bold text-accent-foreground shadow-sm">
          <Sparkles className="size-3" /> Most popular
        </span>
      )}
      <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
      <p className="mt-1 text-sm font-medium text-accent-orange">{pkg.audience}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pkg.description}</p>
      <ul className="mt-5 space-y-2.5">
        {pkg.includes.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
            <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Check className="size-3 text-primary" />
            </span>
            {i}
          </li>
        ))}
      </ul>
      <Button asChild variant={pkg.highlight ? "brand" : "outline"} className="mt-7 w-full">
        <Link to="/contact">Request Appointment</Link>
      </Button>
    </motion.article>
  );
}