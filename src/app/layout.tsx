import type { Metadata } from "next";
import { Outfit, ABeeZee, Poppins, Inter, Kumbh_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbhSans",
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const aBeeZee = ABeeZee({
  subsets: ["latin"],
  variable: "--font-aBeeZee",
  weight: "400",
});
const madeOuterSansAlt = localFont({
  src: [
    {
      path: "../../public/fonts/made-outer-sans-alt/black-900.otf",
      weight: "900",
    },
    {
      path: "../../public/fonts/made-outer-sans-alt/bold-700.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/made-outer-sans-alt/medium-500.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/made-outer-sans-alt/regular-400.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/made-outer-sans-alt/light-300.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/made-outer-sans-alt/thin-100.otf",
      weight: "100",
    },
  ],
  variable: "--font-made-outer-sans-alt",
});

export const metadata: Metadata = {
  title: "Octa HQ",
  description: "Free Event Hosting, Instant Ticket Sales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${madeOuterSansAlt.variable} ${kumbhSans.variable} ${inter.variable} ${outfit.variable} ${aBeeZee.variable} ${poppins.variable} flex min-h-dvh flex-col font-outfit`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
