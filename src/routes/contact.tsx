import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactInfo } from "@/data/locations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Ohana Care Clinic Africa" },
      {
        name: "description",
        content:
          "Contact Ohana Care Clinic Africa to request an appointment or ask about our services. All appointment requests are handled by our care team.",
      },
      { property: "og:title", content: "Contact Us — Ohana Care Clinic Africa" },
      {
        property: "og:description",
        content: "Reach our care team by phone, email or the contact form. No one left behind.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number").max(20),
  topic: z.string().min(1, "Please choose a topic"),
  message: z.string().min(10, "Please tell us a little more").max(1000),
});

type FormValues = z.infer<typeof formSchema>;

const topics = [
  "Outpatient Care",
  "Teleconsultation",
  "Laboratory Services",
  "Home Care Services",
  "Wellness Packages",
  "General Enquiry",
];

const details = [
  { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: MapPin, label: "Address", value: contactInfo.address },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 7:00am – 8:00pm" },
];

function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", topic: "", message: "" },
  });

  function onSubmit(values: FormValues) {
    // No booking backend — requests are handled by the care team.
    console.log("Contact request:", values);
    toast.success("Thank you! Your request has been received.", {
      description: "Our care team will reach out to you shortly.",
    });
    form.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're here to help"
        description="Have a question or want to request an appointment? Send us a message and our care team will be in touch — no one left behind."
      />

      <section className="section-container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="space-y-4">
              {details.map((d) => {
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-primary/30">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                      <d.icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-muted-foreground">{d.label}</span>
                      <span className="block font-semibold text-foreground">{d.value}</span>
                    </span>
                  </div>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} className="block">{content}</a>
                ) : (
                  <div key={d.label}>{content}</div>
                );
              })}

              <div
                className="flex h-56 items-center justify-center rounded-2xl border border-border bg-secondary/40"
                role="img"
                aria-label="Map placeholder showing Ohana Care Clinic location"
              >
                <div className="flex flex-col items-center text-primary">
                  <MapPin className="size-10" />
                  <span className="mt-2 text-sm font-semibold">Map placeholder</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div className="rounded-3xl border border-border bg-card p-7 shadow-card md:p-9">
              <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                All appointment requests are handled personally by our care team.
              </p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+254 700 000 000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help?</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a topic" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {topics.map((t) => (
                              <SelectItem key={t} value={t}>{t}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea rows={5} placeholder="Tell us how we can help…" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" variant="brand" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                    Send Message <Send className="size-4" />
                  </Button>
                </form>
              </Form>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
