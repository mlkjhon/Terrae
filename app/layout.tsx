import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TERRÆ — A Digital Archive of Earth",
  description:
    "An immersive digital archive dedicated to the beauty, diversity, and scale of planet Earth. Explore biomes, species, and phenomena that make our planet extraordinary.",
  keywords: ["Earth", "nature", "wildlife", "biodiversity", "biomes", "environmental", "photography", "editorial"],
  openGraph: {
    title: "TERRÆ — A Digital Archive of Earth",
    description: "One planet. Infinite worlds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
