import type { Metadata } from "next";
import { Montserrat, Lato, Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./Registry";
import Navbar from "../../src/app/Components/Navbar";
import Footer from "../../src/app/Components/Footer";

// Load fonts
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Resolve360",
  description: "India Most Trusted Services for Loan Settlement & Anti-Harassment",
  openGraph: {
    title: "Resove360",
    description: "India Most Trusted Services for Loan Settlement & Anti-Harassment",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Logo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`
          ${montserrat.variable} ${lato.variable} 
          ${poppins.variable} ${nunitoSans.variable} 
          antialiased min-h-screen flex flex-col
        `}
        style={{ overflowX: "hidden" }} // Prevents horizontal scroll
      >
        <StyledComponentsRegistry>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
