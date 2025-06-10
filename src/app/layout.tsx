"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Script from "next/script";
import { Exo } from "next/font/google";

import "./globals.css";
import theme from "@/app/theme/index";

const exo = Exo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-exo-sans",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OMEGON</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <meta
          name="description"
          content="Diseñamos con propósito, desarrollamos con precisión."
        />
        <meta
          name="keywords"
          content="Tecnología, UX/UI, Desarrollo Web, Software, IA, Transformación Digital"
        />

        <meta property="og:title" content="OMEGON" />
        <meta
          property="og:description"
          content="Diseñamos con propósito, desarrollamos con precisión."
        />
        <meta
          property="og:image"
          content="https://omegon.com.ar/assets/logos/logo_omegon.jpg"
        />
        <meta property="og:url" content="https://omegon.com.ar" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OMEGON" />
        <meta
          name="twitter:description"
          content="Diseñamos con propósito, desarrollamos con precisión."
        />
        <meta
          name="twitter:image"
          content="https://omegon.com.ar/assets/logos/logo_omegon.jpg"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0MMCPMXS8G"
          strategy="lazyOnload"        />
          <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0MMCPMXS8G');
          `}
        </Script>

        {/* Scripts adicionales */}
        <Script
          src="https://cdn.lordicon.com/bhenfmcm.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={exo.variable}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
