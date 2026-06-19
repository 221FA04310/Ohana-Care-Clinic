import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (next: number) => {
    setDir(next > index || (index === testimonials.length - 1 && next === 0) ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  };

  const indexRef = useRef(index);
  indexRef.current = index;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(indexRef.current + 1), 6000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  const t = testimonials[index];

  return (
    <div
      className="mx-auto mt-10 max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative min-h-[18rem] overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card md:p-12">
        <Quote className="size-10 text-accent-orange/40" />
        <AnimatePresence mode="wait" custom={dir}>
          <motion.blockquote
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4"
          >
            <p className="text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              “{t.quote}”
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-full bg-gradient-primary font-bold text-primary-foreground ring-2 ring-primary/15 ring-offset-2 ring-offset-card">
                {t.initials}
              </span>
              <span>
                <span className="block font-bold text-foreground">{t.name}</span>
                <span className="block text-sm text-muted-foreground">{t.role}</span>
              </span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={
                i === index
                  ? "h-2.5 w-7 rounded-full bg-primary transition-all"
                  : "size-2.5 rounded-full bg-border transition-all hover:bg-primary/50"
              }
            />
          ))}
        </div>
        <button
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
