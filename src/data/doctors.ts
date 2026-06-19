export type Doctor = {
  id: string;
  name: string;
  specialization: string;
  category: string;
  experience: number;
  qualification: string;
  summary: string;
  intro: string;
  expertise: string[];
  initials: string;
};

export const doctors: Doctor[] = [
  {
    id: "amara-okafor",
    name: "Dr. Amara Okafor",
    specialization: "General Practice",
    category: "General Practice",
    experience: 14,
    qualification: "MBChB, MMed (Family Medicine)",
    summary:
      "Compassionate generalist focused on whole-person, preventive care for families.",
    intro:
      "Dr. Amara believes accessible primary care is the foundation of healthy communities. She partners with patients to prevent illness before it starts.",
    expertise: [
      "Preventive health checks",
      "Chronic disease management",
      "Acute illness care",
      "Health education",
    ],
    initials: "AO",
  },
  {
    id: "kwame-mensah",
    name: "Dr. Kwame Mensah",
    specialization: "Internal Medicine",
    category: "Internal Medicine",
    experience: 18,
    qualification: "MBChB, MMed (Internal Medicine)",
    summary:
      "Internist specialising in complex adult conditions and long-term care plans.",
    intro:
      "Dr. Kwame brings nearly two decades of hospital and community experience to managing chronic and complex medical conditions.",
    expertise: [
      "Hypertension & diabetes",
      "Cardiometabolic health",
      "Chronic care monitoring",
      "Diagnostic interpretation",
    ],
    initials: "KM",
  },
  {
    id: "zainab-hassan",
    name: "Dr. Zainab Hassan",
    specialization: "Women's Health",
    category: "Women's Health",
    experience: 12,
    qualification: "MBChB, Dip. Obstetrics & Gynaecology",
    summary:
      "Dedicated to women's wellness across every life stage with dignity and care.",
    intro:
      "Dr. Zainab provides sensitive, evidence-based care for women, from reproductive health to preventive screening.",
    expertise: [
      "Reproductive health",
      "Cervical & breast screening",
      "Family planning",
      "Antenatal guidance",
    ],
    initials: "ZH",
  },
  {
    id: "david-otieno",
    name: "Dr. David Otieno",
    specialization: "Pediatrics",
    category: "Pediatrics",
    experience: 10,
    qualification: "MBChB, MMed (Paediatrics)",
    summary:
      "Gentle, child-first care from newborns to teens, including home visits.",
    intro:
      "Dr. David makes healthcare a positive experience for children, supporting families through growth, illness and immunisation.",
    expertise: [
      "Childhood immunisation",
      "Growth & development",
      "Common childhood illness",
      "Nutrition counselling",
    ],
    initials: "DO",
  },
  {
    id: "fatou-diallo",
    name: "Dr. Fatou Diallo",
    specialization: "Family Medicine",
    category: "Family Medicine",
    experience: 16,
    qualification: "MBChB, MMed (Family Medicine)",
    summary:
      "Family physician championing community-based and home healthcare models.",
    intro:
      "Dr. Fatou leads our home care programme, bringing quality medical attention directly to patients' doorsteps.",
    expertise: [
      "Home medical visits",
      "Elderly care",
      "Recovery support",
      "Continuity of care",
    ],
    initials: "FD",
  },
  {
    id: "samuel-adebayo",
    name: "Dr. Samuel Adebayo",
    specialization: "Laboratory Medicine",
    category: "Laboratory Medicine",
    experience: 15,
    qualification: "MBChB, MSc Clinical Pathology",
    summary:
      "Diagnostics lead ensuring accurate, timely and accessible lab results.",
    intro:
      "Dr. Samuel oversees our modern diagnostics, turning precise testing into clear, actionable health insights.",
    expertise: [
      "Diagnostic testing",
      "Preventive screening",
      "Pathology interpretation",
      "Quality assurance",
    ],
    initials: "SA",
  },
];

export const specializations = [
  "All Specializations",
  ...Array.from(new Set(doctors.map((d) => d.category))),
];
