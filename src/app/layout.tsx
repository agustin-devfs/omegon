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
        {/* Meta básico para codificación de caracteres */}
        <meta charSet="UTF-8" />
        {/* Meta para un diseño responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Compatibilidad con IE */}
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {/* Título de la página - Aparece en pestañas y búsqueda */}
        <title>OMEGON</title>

        {/* Preconexión para mejorar la carga de fuentes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ----- Mejoras de SEO ----- */}
        {/* Meta descripción para mejorar posicionamiento en buscadores */}
        <meta name="description" content="Diseñamos con propósito, desarrollamos con precisión." />
        {/* Meta keywords (algunos motores no lo usan, pero ayuda en SEO inicial) */}
        <meta name="keywords" content="Tecnología, UX/UI, Desarrollo Web, Software, IA, Transformación Digital" />

        {/* ----- Etiquetas Open Graph para compartir en redes sociales ----- */}
        <meta property="og:title" content="OMEGON" />
        <meta property="og:description" content="Diseñamos con propósito, desarrollamos con precisión." />
        {/* Ruta absoluta para que redes sociales la reconozcan correctamente */}
        <meta property="og:image" content="https://omegon.com.ar/assets/logos/logo_omegon.jpg" />
        <meta property="og:url" content="https://omegon.com.ar" />
        <meta property="og:type" content="website" />

        {/* ----- Etiquetas para Twitter Card ----- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OMEGON" />
        <meta name="twitter:description" content="Diseñamos con propósito, desarrollamos con precisión." />
        <meta name="twitter:image" content="https://omegon.com.ar/assets/logos/logo_omegon.jpg" />

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
