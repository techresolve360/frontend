import type { Metadata } from "next";
import { Montserrat, Lato, Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./Registry";
import Navbar from "../../src/app/Components/Navbar";
import Footer from "../../src/app/Components/Footer";
import Script from "next/script";

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
      <head>
        {/* ✅ Meta Pixel NoScript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1482712739519854&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body
        className={`
          ${montserrat.variable} ${lato.variable} 
          ${poppins.variable} ${nunitoSans.variable} 
          antialiased min-h-screen flex flex-col
        `}
        style={{ overflowX: "hidden" }} // Prevents horizontal scroll
      >
        {/* ✅ Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-6ZNLF14EDB"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6ZNLF14EDB');
          `}
        </Script>
        {/* ✅ Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1482712739519854');
              fbq('track', 'PageView');
            `,
          }}
        />
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
