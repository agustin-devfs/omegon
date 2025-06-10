"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Script from "next/script";
import theme from "@/app/theme/index";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      {/* Material UI Theme + CSS reset */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0MMCPMXS8G"
        strategy="lazyOnload"
        defer
      />
      <Script id="google-analytics" strategy="lazyOnload" defer>
        {`window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}  
         gtag('js', new Date());
         gtag('config', 'G-0MMCPMXS8G');`}
      </Script>

      {/* Terceros adicionales */}
      <Script
        src="https://cdn.lordicon.com/bhenfmcm.js"
        strategy="lazyOnload"
        defer
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        defer
      />
    </>
  );
}
