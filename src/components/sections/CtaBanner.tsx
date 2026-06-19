import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type CtaBannerProps = {
  title: string;
  description?: string;
  buttonLabel?: string;
};

export function CtaBanner({
  title,
  description,
  buttonLabel = "Contact Our Team",
}: CtaBannerProps) {
  return (
    <section className="section-container py-16 md:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero px-6 py-14 text-center text-primary-foreground shadow-glow md:px-12 md:py-20">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="animate-float-slow absolute -right-20 -top-20 size-72 rounded-full bg-accent/25 blur-3xl" />
        <div className="animate-float-slower absolute -bottom-20 -left-20 size-72 rounded-full bg-primary-foreground/10 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl"
        >
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          {description && (
            <p className="mt-4 text-lg text-primary-foreground/85">{description}</p>
          )}
          <Button asChild variant="hero" size="xl" className="mt-8">
            <Link to="/contact">
              {buttonLabel} <ArrowRight className="size-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
