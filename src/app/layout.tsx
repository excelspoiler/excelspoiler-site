import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Excel Spoiler - Corsi di Excel Avanzati",
  description: "Scopri i segreti di Excel con i nostri corsi professionali. Dalle basi alle funzioni avanzate, diventa un esperto di fogli di calcolo.",
  keywords: "excel, corsi excel, formule excel, power bi, vba, spreadsheet",
  authors: [{ name: "Excel Spoiler" }],
  openGraph: {
    title: "Excel Spoiler - Corsi di Excel Avanzati",
    description: "Scopri i segreti di Excel con i nostri corsi professionali",
    url: "https://excelspoiler.it",
    siteName: "Excel Spoiler",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Excel Spoiler Logo",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased min-h-screen flex flex-col">
        <Providers session={null}>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
