import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meridian — Therapy homework that clients actually finish",
  description:
    "Meridian is a clinical homework and outcomes platform built for therapists. Warm, mobile-first exercises clients want to complete — with the data therapists need.",
  metadataBase: new URL("https://meridian.health"),
  openGraph: {
    title: "Meridian — Find your meridian",
    description:
      "The therapy homework platform built by a therapist. CBT and DBT exercises clients actually finish, with outcomes tracking that integrates with your EHR.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
