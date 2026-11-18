import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santa Carmem Palace Hotel | Sua estadia com conforto",
  description: "Hospitalidade e conforto em Santa Carmem, Mato Grosso. Consulte acomodações e disponibilidade pelo WhatsApp.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
