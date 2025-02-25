// components/Hero.tsx
"use client";

import React, { createElement } from "react";
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
import ShaderCanvas from "@/app/sections/Hero/ShaderCanvas"; // Ajusta la ruta según tu estructura
import { statics } from "@/app/utils/statics";
import { content } from "@/app/utils/content";
import ButtonCub from "@/app/components/Buttons/Cub/buton";
import { ServiceCardProps } from "@/app/components/Cards/cardService/CardService";

const Hero: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const Background = theme.palette.success.main;
  const textColor = theme.palette.primary.main;
  const textColor2 = theme.palette.info.main;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        py: { xs: 5, md: 10 },
      }}
    >
      {/* Canvas con el shader (fondo) */}
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

      {/* Contenido de la sección Hero */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          color: textColor2,
        }}
      >
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              fontSize={90}
              sx={{ mb: 0, zIndex: 0, maxWidth: "100%" }}
            >
              {statics.COMPANY.TITLE}
            </Typography>

            <Typography
              variant="h3"
              fontSize={20}
              sx={{ color: "#FFFFFF", mb: 4 }}
            >
              {statics.COMPANY.TEXT}
            </Typography>

            <Stack
              direction={isSmallScreen ? "column" : "row"}
              spacing={isSmallScreen ? 1 : isMediumScreen ? 3 : 4}
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                alignItems: { xs: "flex-start", sm: "center", md: "center" },
                mb: 10,
              }}
            >
              {content.cards.map((n: ServiceCardProps, index: number) => (
                <Link
                  key={index}
                  href={n.linkNav}
                  underline="none"
                  style={{
                    color: textColor,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    maxWidth: "100%",
                  }}
                >
                  {/*  <Image
                                   src={n.imageSrc}
                                   alt={n.imageAlt}
                                   loading="lazy"
                                   width={isSmallScreen ? 16 : 24}
                                   height={24}
                                   style={{ borderRadius: "10%" }}
                                 /> */}

                  {createElement("lord-icon", {
                    src: n.iconSrc,
                    trigger: "in",
                    delay: "1500",
                    state: "in-reveal",
                    colors: "primary:#e4e4e4,secondary:#7abf5a",
                    style: { width: "50px", height: "50px" },
                    alt: n.imageAlt,
                  })}
                  <Typography
                    sx={{
                      fontFamily: "Raleway",
                      fontWeight: 600,
                      fontSize: { xs: "12px", md: "19px" },
                      lineHeight: { xs: "16px", md: "25px" },
                      letterSpacing: "1%",
                      color: textColor2,
                      maxWidth: "100%",
                    }}
                    noWrap={false}
                  >
                    {n.title}
                  </Typography>
                </Link>
              ))}
            </Stack>

            <Link
              href={statics.COMPANY.BUTTON.link}
              rel="noopener noreferrer"
              underline="none"
              target="_blank"
            >
              <Box mt={0.5} textAlign="center">
                <ButtonCub
                  text={statics.COMPANY.BUTTON.NAME}
                  hovered={statics.COMPANY.BUTTON.NAME}
                  color_primary={textColor}
                  color_secondary={Background}
                  size="3rem 8rem"
                />
              </Box>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
            <Image
              src="/assets/hero.png"
              alt="Imagen hero"
              width={600}
              height={600}
              loading="lazy"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
