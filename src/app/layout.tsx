import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VivaPet - Pet Shop & Serviços',
  description:
    'Cuidando do seu pet com carinho e dedicação. Pet shop e serviços especializados.',
  keywords:
    'pet shop, veterinário, banho e tosa, produtos para pets, cuidados com pets',
  authors: [{ name: 'VivaPet' }],
  openGraph: {
    title: 'VivaPet - Pet Shop & Serviços',
    description: 'Cuidando do seu pet com carinho e dedicação',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
