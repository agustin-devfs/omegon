"use client";

import { ReactNode, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Script from "next/script";
import { Exo } from "next/font/google";

import "./globals.css";
import theme from "@/app/theme/index";

// Reducir variantes de la fuente Exo para optimizar carga
const exo = Exo({
  weight: ["400", "700"], // Solo los pesos necesarios
  style: ["normal"], // Solo el estilo necesario
  subsets: ["latin"],
  variable: "--font-exo-sans",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    const loadScript = (src: string, condition: boolean) => {
      if (condition) {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Cargar Calendly solo si hay un elemento relacionado
    const calendlyElement = document.querySelector(".calendly-widget");
    loadScript("https://assets.calendly.com/assets/external/widget.js", !!calendlyElement);

    // Cargar Lordicon solo si hay un elemento relacionado
    const lordiconElement = document.querySelector(".lordicon-widget");
    loadScript("https://cdn.lordicon.com/bhenfmcm.js", !!lordiconElement);
  }, []);

  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OMEGON</title>

        {/* Optimización de preconexión */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Exo:wght@400;700&display=swap"
          media="print"
          onLoad={(e) => {
            (e.currentTarget as HTMLLinkElement).media = "all";
          }}
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
          strategy="afterInteractive" // Cambiado a afterInteractive para optimizar carga
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0MMCPMXS8G', { 'anonymize_ip': true });
          `}
        </Script>
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