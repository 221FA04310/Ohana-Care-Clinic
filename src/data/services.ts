import {
  Stethoscope,
  Video,
  FlaskConical,
  HomeIcon,
  HeartPulse,
  Users,
  Activity,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  note?: string;
};

export const services: Service[] = [
  {
    slug: "outpatient",
    title: "Outpatient Clinic Visits",
    icon: Stethoscope,
    tagline: "Quality consultations, when you need them",
    description:
      "Our outpatient clinics provide attentive, unhurried consultations with experienced clinicians for everyday and ongoing health needs.",
    features: [
      "General & specialist consultations",
      "Acute illness assessment",
      "Chronic condition reviews",
      "Health advice & referrals",
    ],
    cta: "Request Appointment",
    note: "Outpatient consultations are available. To arrange a visit, simply reach our care team — no online booking required.",
  },
  {
    slug: "family-medicine",
    title: "Family Medicine",
    icon: Users,
    tagline: "Comprehensive primary care for every member of the family",
    description:
      "Holistic family medicine offering diagnosis, continuous care and prevention across all ages — from children to older adults.",
    features: [
      "Upper respiratory infections",
      "Allergies",
      "Asthma",
      "COPD",
      "Gastric disorders",
      "Liver disorders",
      "Hypertension management",
      "Chronic disease management",
    ],
    cta: "Request Appointment",
  },
  {
    slug: "diabetes-care",
    title: "Diabetes Care Clinic",
    icon: HeartPulse,
    tagline: "Specialised diabetes management and support",
    description:
      "Comprehensive diabetes care including specialist consultations, kidney and foot care, nutrition planning and lifestyle counselling.",
    features: [
      "Specialist consultations",
      "Diabetes management",
      "Diabetic kidney disease management",
      "Diabetic foot care",
      "Nutrition meal planning",
      "Lifestyle counselling",
    ],
    cta: "Request Appointment",
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    icon: Stethoscope,
    tagline: "Comprehensive gynecology and maternal care",
    description:
      "Integrated women's health services including gynecology, family planning, antenatal and postnatal care and cancer screening.",
    features: [
      "Women's health consultations",
      "Reproductive health management",
      "Family planning",
      "Breast cancer screening",
      "Cervical cancer screening",
      "Post-surgical follow-up",
    ],
    cta: "Request Appointment",
  },
  {
    slug: "antenatal-care",
    title: "Antenatal Care",
    icon: ShieldCheck,
    tagline: "Pregnancy monitoring and support",
    description:
      "Antenatal programmes offering routine checkups, high-risk pregnancy management, supplementation and maternal education.",
    features: [
      "Pregnancy monitoring",
      "Antenatal checkups",
      "High-risk pregnancy management",
      "Hypertension during pregnancy",
      "Diabetes during pregnancy",
      "Iron and folate supplementation",
      "Maternal health education",
    ],
    cta: "Request Appointment",
  },
  {
    slug: "postnatal-care",
    title: "Postnatal Care",
    icon: Users,
    tagline: "Support for mothers and newborns",
    description:
      "Postnatal programmes focused on mother and newborn wellbeing, breastfeeding guidance and family planning counselling.",
    features: [
      "Mother and newborn care",
      "Breastfeeding guidance",
      "Family planning counselling",
      "Recovery monitoring",
    ],
    cta: "Request Appointment",
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy Services",
    icon: Activity,
    tagline: "Restoring movement and relieving pain",
    description:
      "Therapeutic physiotherapy for post-surgical rehab, work injuries, pain management and mobility restoration.",
    features: [
      "Post-surgical rehabilitation",
      "Work injury rehabilitation",
      "Pain management",
      "Mobility restoration",
      "Therapeutic exercise programs",
      "Muscle spasm treatment",
    ],
    cta: "Request Appointment",
  },
  {
    slug: "adolescent-counselling",
    title: "Adolescent Counseling Center",
    icon: ShieldCheck,
    tagline: "Support for young people navigating health and life",
    description:
      "Dedicated adolescent health services offering psychological counselling, social support and health education.",
    features: [
      "Adolescent health support",
      "Psychological counselling",
      "Social support services",
      "Health education",
    ],
    cta: "Request Appointment",
  },
  {
    slug: "family-counselling",
    title: "Family Counseling",
    icon: Users,
    tagline: "Helping families build healthier relationships",
    description:
      "Family wellness programmes focused on relationship counselling, emotional support and family resilience.",
    features: [
      "Family wellness support",
      "Relationship counselling",
      "Emotional support programs",
    ],
    cta: "Request Appointment",
  },
  {
    slug: "teleconsultation",
    title: "Teleconsultation",
    icon: Video,
    tagline: "Care that reaches you, wherever you are",
    description:
      "We are expanding telehealth awareness so more families can connect with trusted clinicians remotely and reduce barriers to care.",
    features: [
      "Remote clinical guidance",
      "Follow-up conversations",
      "Reduced travel & waiting",
      "Telehealth awareness & education",
    ],
    cta: "Speak To Our Team",
    note: "This is an awareness service. To learn how teleconsultation can work for you, speak directly to our care team.",
  },
  {
    slug: "laboratory",
    title: "Laboratory Testing",
    icon: FlaskConical,
    tagline: "Accurate diagnostics you can trust",
    description:
      "Modern diagnostics that turn precise testing into clear, actionable insights for prevention and treatment.",
    features: [
      "Diagnostic testing",
      "Preventive screening",
      "Routine lab services",
      "Clear result interpretation",
    ],
    cta: "Request Appointment",
  },
  {
    slug: "home-care",
    title: "Home Care Services",
    icon: HomeIcon,
    tagline: "Bringing healthcare to your doorstep",
    description:
      "Compassionate, professional medical care delivered in the comfort and safety of your own home.",
    features: [
      "Home medical visits",
      "Elderly care",
      "Recovery support",
      "Chronic care monitoring",
    ],
    cta: "Request Appointment",
  },
  {
    slug: "wellness",
    title: "Wellness Packages",
    icon: HeartPulse,
    tagline: "Proactive health for the whole family",
    description:
      "Comprehensive wellness packages that combine consultation, testing and screening into one clear, preventive programme.",
    features: [
      "Consultation",
      "Laboratory testing",
      "Preventive health screening",
      "Follow-up guidance",
    ],
    cta: "Request Appointment",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
