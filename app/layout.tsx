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
import Script from "next/script";

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
  description:
    "Join KRMU Launchpad 2026 - A Pre-Enrollment Programme with sessions by top creators & industry leaders. Build skills & confidence. Register Now!",
  verification: {
    google: "-bhKCuhZrMwY93wMOanH66_uVGlrdB4ZMYSEik3Zl-M",
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
      className={`${poppins.variable} ${domine.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <head>
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VJJK572TGN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VJJK572TGN');
        `}
        </Script> */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRHWCK9X');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#001732]">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRHWCK9X"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
