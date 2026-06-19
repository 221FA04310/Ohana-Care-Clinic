export type WellnessPackage = {
  name: string;
  audience: string;
  description: string;
  includes: string[];
  highlight?: boolean;
};

export const wellnessPackages: WellnessPackage[] = [
  {
    name: "Executive Wellness",
    audience: "Busy professionals",
    description:
      "A thorough health review designed around demanding schedules and long-term performance.",
    includes: [
      "Comprehensive consultation",
      "Full laboratory testing",
      "Cardiometabolic screening",
      "Personalised follow-up guidance",
    ],
    highlight: true,
  },
  {
    name: "Women's Wellness",
    audience: "Women of all ages",
    description:
      "Preventive care tailored to women's health across every life stage.",
    includes: [
      "Women's health consultation",
      "Targeted laboratory testing",
      "Cervical & breast screening",
      "Follow-up guidance",
    ],
  },
  {
    name: "Men's Wellness",
    audience: "Men of all ages",
    description:
      "Focused screening and consultation to keep men healthy and proactive.",
    includes: [
      "Men's health consultation",
      "Laboratory testing",
      "Preventive screening",
      "Follow-up guidance",
    ],
  },
  {
    name: "Family Wellness",
    audience: "The whole family",
    description:
      "Affordable, coordinated care that keeps every member of the family healthy.",
    includes: [
      "Family consultations",
      "Laboratory testing",
      "Preventive screening",
      "Follow-up guidance",
    ],
  },
  {
    name: "Corporate Wellness",
    audience: "Teams & organisations",
    description:
      "Workplace health programmes that support productive, healthy teams.",
    includes: [
      "On-site / clinic consultations",
      "Group laboratory testing",
      "Preventive screening",
      "Wellness reporting & guidance",
    ],
  },
];
