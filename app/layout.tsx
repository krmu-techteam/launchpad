import type { Metadata } from "next";
import { Domine, Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

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
        <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2">
          <div className="flex flex-col">
            <button className="bg-red-600 text-white font-bold tracking-wider px-3 py-6 rounded-l-lg [writing-mode:vertical-rl] rotate-180">
              REGISTER NOW
            </button>

            <button className="bg-[#f3f3f3] text-[#333] font-bold tracking-wider px-3 py-6 rounded-l-lg mt-1 [writing-mode:vertical-rl] rotate-180">
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
