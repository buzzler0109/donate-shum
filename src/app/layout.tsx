import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "SHUM OSINT | Donation Hub",
  description: "Підтримай SHUM OSINT Community. Приєднуйтесь до нашої команди.",
  keywords: ["SHUM", "OSINT", "donation", "Ukraine", "підтримка"],
  icons: {
    icon: "/images/favicon_.png",
  },
  openGraph: {
    title: "SHUM OSINT | Donation Hub",
    description: "Підтримай SHUM OSINT Community",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${bebasNeue.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
