import type { Metadata } from "next";
import { Domine, Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import CommonLeadPopup from "./components/CommonLeadup";
import NpfPopup from "./components/form/NpfPopup";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const domine = Domine({
  subsets: ["latin"],
  variable: "--font-domine",
});

export const metadata: Metadata = {
  title: "The Launchpad",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${domine.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
