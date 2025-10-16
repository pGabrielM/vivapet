import { type Service } from "../lib/types";

export const services: Service[] = [
  {
    id: 1,
    titleKey: "services_data.consultation.title",
    descKey: "services_data.consultation.description",
    icon: "Stethoscope",
    image: "/images/services/consultas-veterinarias.jpg",
  },
  {
    id: 2,
    titleKey: "services_data.surgery.title",
    descKey: "services_data.surgery.description",
    icon: "Scissors",
    image: "/images/services/cirurgias-procedimentos.jpg",
  },
  {
    id: 3,
    titleKey: "services_data.vaccines.title",
    descKey: "services_data.vaccines.description",
    icon: "Syringe",
    image: "/images/services/vacinas-prevencao.jpg",
  },
  {
    id: 4,
    titleKey: "services_data.exams.title",
    descKey: "services_data.exams.description",
    icon: "Microscope",
    image: "/images/services/exames-laboratoriais.jpg",
  },
  {
    id: 5,
    titleKey: "services_data.grooming.title",
    descKey: "services_data.grooming.description",
    icon: "Sparkles",
    image: "/images/services/banho-tosa.jpg",
  },
  {
    id: 6,
    titleKey: "services_data.emergency.title",
    descKey: "services_data.emergency.description",
    icon: "Ambulance",
    image: "/images/services/emergencia-24h.jpg",
  },
];
