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
    <html lang="en">
      <head>
        {/* Meta básico para codificación de caracteres */}
        <meta charSet="UTF-8" />
        {/* Meta para un diseño responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Compatibilidad con IE */}
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {/* Título de la página */}
        <title>OMegon</title>

        {/* Preconexión para mejorar la carga de fuentes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ----- Mejoras de SEO ----- */}
        {/* Meta descripción para SEO */}
        <meta name="description" content="Software Company" />
        {/* Meta keywords (opcional, algunos motores ya no lo usan) */}
        <meta name="keywords" content="OMegon, tecnología, Software Company, Disign, " />

        {/* ----- Etiquetas Open Graph para compartir en redes sociales ----- */}
        <meta property="og:title" content="OMegon" />
        <meta property="og:description" content="Software Company" />
        {/* Ruta o URL de la imagen para la miniatura; reemplaza '/path/to/your/thumbnail.jpg' por la ruta real */}
        <meta property="og:image" content="/assets/logo/logo_oscuro" />
        <meta property="og:url" content="https://omegon.com.ar" />
        <meta property="og:type" content="website" />

        {/* ----- Etiquetas para Twitter Card ----- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OMegon" />
        <meta name="twitter:description" content="Breve descripción que se mostrará al compartir en Twitter, resaltando la miniatura y el contenido de la página." />
        <meta name="twitter:image" content="/path/to/your/thumbnail.jpg" />

        {/* Carga del script externo para los íconos de Lordicon */}
        <Script src="https://cdn.lordicon.com/bhenfmcm.js" strategy="afterInteractive" />
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
