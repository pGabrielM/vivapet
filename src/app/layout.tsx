import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VivaPet - Clínica Veterinária e Pet Shop | Cuidado Completo para seu Pet",
  description:
    "Clínica veterinária especializada em cães e gatos. Oferecemos consultas, vacinas, cirurgias, banho, tosa, hospedagem e produtos pet. Atendimento 24/7. Agende sua consulta!",
  keywords: [
    "veterinária",
    "clínica veterinária",
    "pet shop",
    "cães",
    "gatos",
    "banho e tosa",
    "vacinas para pets",
    "cirurgia veterinária",
    "hospedagem de pets",
    "emergência veterinária",
  ],
  authors: [{ name: "VivaPet" }],
  openGraph: {
    title: "VivaPet - Clínica Veterinária e Pet Shop",
    description: "Cuidado veterinário completo para seu pet com amor e profissionalismo",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "VivaPet - Clínica Veterinária e Pet Shop",
    description: "Cuidado veterinário completo para seu pet com amor e profissionalismo",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
