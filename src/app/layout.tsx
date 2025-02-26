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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>OMegon</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
