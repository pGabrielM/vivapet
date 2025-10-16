import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VivaPet - Clínica Veterinária e Pet Shop | Cuidado Completo para seu Pet",
  description:
    "Clínica veterinária especializada em cães e gatos. Oferecemos consultas, vacinas, cirurgias, banho, tosa, hospedagem e produtos pet. Atendimento 24/7. Agende sua consulta!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
