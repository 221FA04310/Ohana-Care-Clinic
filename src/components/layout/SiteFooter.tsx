import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Send } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/ohana-footer-logo.png";
import { contactInfo } from "@/data/locations";
import { services } from "@/data/services";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Doctors", to: "/doctors" },
  { label: "Wellness Packages", to: "/wellness-packages" },
  { label: "Locations", to: "/locations" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      {/* Newsletter band */}
      <div className="bg-gradient-hero">
        <div className="section-container flex flex-col items-center justify-between gap-5 py-8 text-primary-foreground md:flex-row">
          <div className="text-center md:text-left">
            <p className="eyebrow text-sm text-primary-foreground/80">Stay connected</p>
            <h3 className="mt-1 text-xl font-bold md:text-2xl">Health tips, straight to your inbox</h3>
          </div>
          <form
            className="flex w-full max-w-md gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const input = form.elements.namedItem("email") as HTMLInputElement;
              if (input?.value) {
                toast.success("Thanks for subscribing! We'll be in touch.");
                form.reset();
              }
            }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
              className="h-11 flex-1 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none transition-colors focus:border-primary-foreground/60"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground text-primary shadow-soft transition-transform hover:scale-105 active:scale-95"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="section-container py-14">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Ohana Care Clinic Africa logo"
              width={220}
              height={220}
              loading="lazy"
              className="h-32 w-auto"
            />
          </div>

          {/* Content Grid */}
          <div className="flex-grow grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-2.5" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-2.5" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-orange" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-accent-orange" />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-accent-orange" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Follow Us</h3>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-background text-primary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-soft"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Accessible, community-based healthcare for every African family.
            </p>
          </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-container flex flex-col items-center justify-center gap-2 py-5 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ohana Care Clinic Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}