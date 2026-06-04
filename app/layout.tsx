import type { Metadata } from "next";
import {
  Domine,
  Geist,
  Geist_Mono,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import CommonLeadPopup from "./components/CommonLeadup";
import NpfPopup from "./components/form/NpfPopup";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const domine = Domine({
  subsets: ["latin"],
  variable: "--font-domine",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "KRMU Launchpad 2026 | K.R. Mangalam University",
  description: "Join KRMU Launchpad 2026 - A Pre-Enrollment Programme with sessions by top creators & industry leaders. Build skills & confidence. Register Now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${domine.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#001732]">
        <Header />
        {children}
      </body>
    </html>
  );
}
