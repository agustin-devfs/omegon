"use client";

import dynamic from "next/dynamic";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  useTheme,
  Stack,
  useMediaQuery,
  Link,
} from "@mui/material";
import Image from "next/image";
import { statics } from "@/app/utils/statics";
import { content } from "@/app/utils/content";
import ButtonCub from "@/app/components/Buttons/Cub/buton";
import LordIcon from "@/app/components/iconos/LordIcon";
import type { ServiceCardProps } from "@/app/components/Cards/cardService/CardService";

// Carga el shader únicamente en cliente, evitando SSR
const ShaderCanvas = dynamic(
  () => import("@/app/sections/Hero/ShaderCanvas"),
  { ssr: false, loading: () => null }
);

interface HeroProps {
  page: string;
}

export default function Hero({ page }: HeroProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const Background = theme.palette.success.main;
  const textColor = theme.palette.primary.main;
  const textColorClaro = theme.palette.info.main;

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const highlightedWords = ["propósito", "precisión"];
  const parsedTitle = statics.COMPANY.TITLE.split(
    /(propósito|precisión)/gi
  ).map((word, i) =>
    highlightedWords.includes(word.toLowerCase()) ? (
      <strong key={i}>{word}</strong>
    ) : (
      word
    )
  );

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
        py: { xs: "15vh", md: "15vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Fondo con Shader (cliente) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <ShaderCanvas />
      </Box>

      {/* Contenido principal */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          color: textColorClaro,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Grid container spacing={1} alignItems="center">
          {/* Texto y botones */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              component="h1"
              fontSize={{ md: 30, xs: 30 }}
              fontWeight={600}
              fontFamily="Exo"
              sx={{ color: textColorClaro, mb: 1 }}
            >
              {statics.COMPANY.NAME}
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              fontSize={{ md: 80, xs: 50 }}
              fontWeight={300}
              fontFamily="Exo"
              sx={{ mb: 0, maxWidth: "100%" }}
            >
              {parsedTitle}
            </Typography>

            {page === "home" && (
              <>
                <Typography
                  variant="h3"
                  fontSize={{ md: 20, xs: 18 }}
                  fontWeight={500}
                  lineHeight={1.25}
                  sx={{ color: "#FFFFFF", mb: 4 }}
                >
                  {statics.COMPANY.TEXT}
                </Typography>

                <Stack
                  direction={isSmallScreen ? "column" : "row"}
                  spacing={isSmallScreen ? 1 : isMediumScreen ? 3 : 4}
                  mb={{ md: 10, xs: 2 }}
                  sx={{ alignItems: "center" }}
                >
                  {content.cards.map((n: ServiceCardProps, idx) => (
                    <Link
                      key={idx}
                      href={n.linkNav}
                      underline="none"
                      sx={{
                        color: textColor,
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <LordIcon
                        src={n.iconSrc}
                        trigger="in"
                        delay="300"
                        state="in-reveal"
                        colors="primary:#e4e4e4,secondary:#7abf5a"
                        style={{ width: "90px", height: "90px" }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Exo",
                          fontWeight: 600,
                          fontSize: { xs: "12px", md: "19px" },
                          lineHeight: { xs: "16px", md: "25px" },
                          letterSpacing: "1%",
                          color: textColorClaro,
                        }}
                      >
                        {n.title}
                      </Typography>
                    </Link>
                  ))}
                </Stack>

                <Box onClick={scrollToContact} textAlign="center">
                  <ButtonCub
                    text={statics.COMPANY.BUTTON.NAME}
                    hovered={statics.COMPANY.BUTTON.NAME}
                    color_primary={textColorClaro}
                    color_secondary={Background}
                    size="3rem 8rem"
                  />
                </Box>
              </>
            )}
          </Grid>

          {/* Imagen hero */}
          {(page === "home" || !isSmallScreen) && (
            <Grid item xs={12} md={6}>
              <Image
                src="/assets/hero.png"
                alt="Imagen hero"
                width={600}
                height={600}
                quality={80}
                loading="lazy"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
