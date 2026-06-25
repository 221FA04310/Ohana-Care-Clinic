export type WellnessPackage = {
  name: string;
  audience: string;
  description: string;
  includes: string[];
  highlight?: boolean;
};

export const wellnessPackages: WellnessPackage[] = [
  {
    name: "Diabetic Wellness Package",
    audience: "Price : 5000",
    description:
      "A thorough health review designed around demanding schedules and long-term performance.",
    includes: [
      "Physician Consultation",
      "Nutritional Counselling with Meal Plan",
      "Full Blood Count(FBC)",
      "Random Blood Sugar(RBS)",
      "HbA1c Test",
      "Urine Analysis",
      "Kidney Function Test(KFT)",
      "Neuropathy Assessment",
    ],
    highlight: true,
  },
  {
    name: "Hypertension Wellness Package",
    audience: "Price : 5000",
    description:
      "Preventive care tailored to women's health across every life stage.",
    includes: [
      "Physician Consultation",
      "Nutritional Counselling with Meal Plan",
      "Kidney Function Test(KFT)",
      "Lipid Profile(Cholesterol Screening)",
      "Electrocardiogram(ECG)",
    ],
    
  },
  {
    name: "Men's Wellness Package",
    audience: "Price : 5000",
    description:
      "Focused screening and consultation to keep men healthy and proactive.",
    includes: [
      "Physician Consultation",
      "BMI Assessment",
      "Full Blood Count(FBC)",
      "Fasting Blood Sugar(FBS)",
      "Urine Analysis",
      "HIV Test(Optional)",
      "Prostate Specific Antigen(PSA) Test",
      "Electrocardiogram(ECG)",
    ],
  },
  {
    name: "Special Men's Wellness Package",
    audience: "Price : 10000",
    description:
      "Affordable, coordinated care that keeps every member of the family healthy.",
    includes: [
      "Physician Consultation",
      "BMI Assessment",
      "Nutritional Counselling",
      "Fasting Blood Sugar(FBS)",
      "Urine Analysis",
      "Prostate Specific Antigen(PSA) Test",
      "Serum Creatinine Test",
      "Liver Function Test(LFT)",
      "Electrocardiogram(ECG)",
    ],
  },
  {
    name: "Women's Wellness Package",
    audience: "Price : 5000",
    description:
      "Workplace health programmes that support productive, healthy teams.",
    includes: [
      "Physician Consultation",
      "Nutritional Counselling",
      "Fasting Blood Sugar(FBS)",
      "Full Blood Count(FBC)",
      "Urine Analysis",
      "HIV Test(Optional)",
      "Electrocardiogram(ECG)",
      "Breast Examination",
      "Thyroid Stimulating Hormone(TSH) Test",
    ],
  },
  {  
  name: "Adolescent Wellness Package",
    audience: "Price : 5000",
    description:
      "Workplace health programmes that support productive, healthy teams.",
    includes: [
      "Family Physician Consultation",
      "Nutritional Counselling",
      "Psychological Counselling",
      "Assistance in Coping Techniques",
      "Full Haemogram(FBC)",
      "HIV Screening",
      "Urine Analysis",
      
    ],
 },

  {  
  name: "Regular Antenatal Check-Up",
    audience: "Price : 2000",
    description:
      "Workplace health programmes that support productive, healthy teams.",
    includes: [
      "Physician Consultation-Regular ANC Check-Ups",
      "Foetal Monitoring",
      "Nutritional Advice",
      "HIV Test",
      "TSH Test",
      "Full Heamogram(FBC)",
      
      
    ],
 },

{  
  name: "Specialist Antenantal Check-Ups",
    audience: "Price : 5000",
    description:
      "Workplace health programmes that support productive, healthy teams.",
    includes: [
      "Consultation with Gynaecologist",
      "TSH Test",
      "HIV Test",
      "Full Haemogram(FBC)",
      "Urine Analysis",
      "Ultrasound Scan(Both Regular and Anomaly Scan)",
      
    ],
 } 

];
