import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerItem } from "@/components/motion/Reveal";
import type { Doctor } from "@/data/doctors";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow duration-300 hover:shadow-card hover:border-primary/30"
    >
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-dot-grid opacity-25" />
        <span className="flex size-24 items-center justify-center rounded-full bg-primary-foreground/15 text-3xl font-bold text-primary-foreground ring-4 ring-primary-foreground/20 transition-transform duration-300 group-hover:scale-105">
          {doctor.initials}
        </span>
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          <Stethoscope className="size-3" /> {doctor.experience}+ yrs
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-foreground">{doctor.name}</h3>
        <p className="text-sm font-semibold text-primary">{doctor.specialization}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{doctor.summary}</p>
        <Button asChild variant="outline" size="sm" className="mt-5 w-full">
          <Link to="/doctors/$id" params={{ id: doctor.id }}>
            View Profile <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}