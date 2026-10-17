import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Manasi Patil | A food & culture journal",
  description:
    "Street food, cafés, thalis and desserts: honest reviews and stories from someone who takes life one bite at a time.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
