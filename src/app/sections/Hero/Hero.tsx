"use client";

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
import ShaderCanvas from "@/app/sections/Hero/ShaderCanvas";
import { statics } from "@/app/utils/statics";
import { content } from "@/app/utils/content";
import ButtonCub from "@/app/components/Buttons/Cub/buton";
import { ServiceCardProps } from "@/app/components/Cards/cardService/CardService";
import LordIcon from "@/app/components/iconos/LordIcon";

const Hero: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const Background = theme.palette.success.main;
  const textColor = theme.palette.primary.main;
  const textColorClaro = theme.palette.info.main;

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh", // Permite que crezca según el contenido
        overflow: "hidden",
        py: { xs: "15vh", md: "2vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Fondo con ShaderCanvas */}
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
          textAlign: { xs: "center", md: "left" }, // Centrado en móviles
        }}
      >
         <Grid container spacing={1} alignItems="center">
         <Typography
              variant="h2"
              component="h2"
              fontSize={{md:30, xs:30}}
              fontWeight={600}
              fontFamily="Exo"
              sx={{ fontFamily: "Exo", color: textColorClaro, mb: 1 }}
            >
              {statics.COMPANY.NAME}
            </Typography>
          <Typography
            variant="h1"
            component="h1"
            fontSize={{md:80, xs:50}}
            fontWeight={300}
            fontFamily="Exo"
            sx={{ mb: 0, zIndex: 0, maxWidth: "100%" }}
          >
            {statics.COMPANY.TITLE.split(/(propósito|precisión)/gi).map(
              (word, index) =>
                ["propósito", "precisión"].includes(word.toLowerCase()) ? (
                  <strong key={index}>{word}</strong>
                ) : (
                  word
                )
            )}
          </Typography>
          <Grid item xs={12} md={6}>
            
            <Typography
              variant="h3"
              fontSize={{md:20, xs:18}}
              fontWeight={500}
              lineHeight={1.25}
              sx={{ fontFamily: "Exo", color: "#FFFFFF", mb: 4 }}
            >
              {statics.COMPANY.TEXT}
            </Typography>

            <Stack
              direction={isSmallScreen ? "column" : "row"}
              spacing={isSmallScreen ? 1 : isMediumScreen ? 3 : 4}
              marginBottom={{md:10,xs:2}}
              sx={{
                flexDirection: { xs: "column", sm: "row", md: "row" },
                alignItems: { xs: "center", sm: "center", md: "center" },
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
                      maxWidth: "100%",
                    }}
                    noWrap={false}
                  >
                    {n.title}
                  </Typography>
                </Link>
              ))}
            </Stack>

            <Box onClick={scrollToContact} mt={0.5} textAlign="center">
              <ButtonCub
                text={statics.COMPANY.BUTTON.NAME}
                hovered={statics.COMPANY.BUTTON.NAME}
                color_primary={textColorClaro}
                color_secondary={Background}
                size="3rem 8rem"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/assets/hero.png"
              alt="Imagen hero"
              width={600}
              height={600}
              priority // Carga la imagen lo antes posible
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>

         
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
