import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/ohana-header-logo.png";
import { contactInfo } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Services", to: "/services" },
  { label: "Wellness", to: "/wellness-packages" },
  { label: "Locations", to: "/locations" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top contact strip — collapses away once the page is scrolled */}
      <div
        className={cn(
          "overflow-hidden border-b border-border bg-primary text-primary-foreground transition-[max-height,opacity] duration-300 ease-out",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="section-container flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-xs font-medium md:justify-between">
          <span className="hidden items-center gap-2 md:flex">
            <MapPin className="size-3.5" /> {contactInfo.address}
          </span>
          <div className="flex items-center gap-5">
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:opacity-80">
              <Phone className="size-3.5" /> {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="hidden items-center gap-2 hover:opacity-80 sm:flex">
              <Mail className="size-3.5" /> {contactInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "glass-surface border-b transition-shadow duration-300",
          scrolled ? "border-border shadow-soft" : "border-border/60",
        )}
      >
        <div className="section-container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Ohana Care Clinic Africa" className="h-14 w-auto md:h-16" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary [&.active]:font-semibold"
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "active" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild variant="brand" size="default">
              <Link to="/contact">
                Book a Visit <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-card lg:hidden"
          >
            <div className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary [&.active]:bg-secondary [&.active]:text-primary"
                    activeOptions={{ exact: link.to === "/" }}
                    activeProps={{ className: "active" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button asChild variant="brand" className="mt-3 w-full" onClick={() => setMenuOpen(false)}>
                <Link to="/contact">
                  Book a Visit <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
