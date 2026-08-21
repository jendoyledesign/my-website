import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const gtWalsheim = localFont({
  src: [
    { path: "../public/fonts/GT-Walsheim-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/GT-Walsheim-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/GT-Walsheim-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/GT-Walsheim-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/GT-Walsheim-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-gt-walsheim",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jen Doyle — Designer",
    template: "%s — Jen Doyle",
  },
  description:
    "Brooklyn based product designer with over ten years of experience.",
  openGraph: {
    title: "Jen Doyle — Designer",
    description: "Brooklyn based product designer with over ten years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gtWalsheim.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
