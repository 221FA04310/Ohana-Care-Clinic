export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ohana Care brought a doctor to my mother's home every week. The dignity and warmth they showed our family was beyond anything we expected.",
    name: "Grace N.",
    role: "Home care family",
    initials: "GN",
  },
  {
    quote:
      "Fast, accurate lab results and a team that actually explained what everything meant. I finally feel in control of my health.",
    name: "Brian K.",
    role: "Diagnostics patient",
    initials: "BK",
  },
  {
    quote:
      "The Women's Wellness package was thorough and caring. No rushing, no judgement — just real preventive healthcare.",
    name: "Amina S.",
    role: "Wellness member",
    initials: "AS",
  },
  {
    quote:
      "Our company enrolled in the corporate wellness programme and our team has never been healthier or more energised.",
    name: "Joseph M.",
    role: "HR Director",
    initials: "JM",
  },
];
