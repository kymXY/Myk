import { Fraunces, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap"
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://mykscoffee.com"),
  title: "Myk's Coffee — Kapeng Barako, Diretso Batangas Hanggang Bahay Mo",
  description:
    "Myk's Coffee roasts real Kapeng Barako from Lipa, Batangas. Bumili online o mag-subscribe at makatipid ng 15% sa bawat order. Libreng delivery sa buong Pilipinas.",
  keywords: [
    "Myk's Coffee",
    "Kapeng Barako",
    "Philippine coffee",
    "Batangas coffee",
    "Pinoy coffee subscription"
  ],
  openGraph: {
    title: "Myk's Coffee — Pilipinas' Sariling Lasa ng Kape",
    description:
      "Real Kapeng Barako from Lipa, Batangas. Shop online or subscribe and save 15%.",
    url: "https://mykscoffee.com",
    siteName: "Myk's Coffee",
    locale: "en_PH",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable} ${spaceMono.variable}`}>
      <body className="bg-ink text-cream font-body antialiased selection:bg-marigold selection:text-ink">
        {children}
      </body>
    </html>
  );
}
