import type { ReactNode } from "react";
import { motion } from "framer-motion";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, imageSrc, imageAlt, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 bg-dot-grid opacity-40" />
      <div className="animate-float-slow absolute -right-24 -top-24 size-80 rounded-full bg-primary-foreground/10 blur-3xl" />
      <div className="animate-float-slower absolute -bottom-24 -left-24 size-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="section-container relative py-16 md:py-24">
        <div className={imageSrc ? "grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center" : ""}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={imageSrc ? "max-w-3xl" : "max-w-3xl"}
          >
            {eyebrow && (
              <span className="eyebrow inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm tracking-wide">
                {eyebrow}
              </span>
            )}
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] md:text-5xl">{title}</h1>
            {description && (
              <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">{description}</p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </motion.div>

          {imageSrc ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] shadow-glow">
                <img
                  src={imageSrc}
                  alt={imageAlt ?? title}
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>

      {/* Signature wave — flows the hero into the page content below */}
      <svg
        viewBox="0 0 1440 84"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="relative block h-10 w-full md:h-16"
      >
        <path
          d="M0,32 C240,84 480,0 720,28 C960,56 1200,8 1440,40 L1440,84 L0,84 Z"
          fill="var(--color-background)"
        />
      </svg>
    </section>
  );
}
