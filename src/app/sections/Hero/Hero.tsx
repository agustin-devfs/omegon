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
import { statics } from "@/app/utils/statics";
import { ServiceNav } from "../Footer/Footer";
import { content } from "@/app/utils/content";
import ButtonCub from "@/app/components/Buttons/Cub/buton";

const Hero: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const Background = theme.palette.success.main;
  const textColor = theme.palette.primary.main;

  return (
    <Box
      sx={{
        backgroundColor: Background,
        color: "info.main", // Texto fosforescente
        py: { xs: 2, md: 4 }, // padding vertical (responsive)
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={1} alignItems="center">
          {/* Columna de texto (izquierda en pantallas md+) */}
          <Typography
            variant="h2"
            component="h1"
            fontSize={90}
            sx={{ mb: 0, zIndex: 1, maxWidth: "100%" }}
          >
            {statics.COMPANY.TITLE}
          </Typography>

          <Grid item xs={12} md={6}>
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
              {content.cards.map((n: ServiceNav, index: number) => (
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
                  <Image
                    src={n.imageSrc}
                    alt={n.imageAlt}
                    loading="lazy"
                    width={isSmallScreen ? 16 : 24}
                    height={24}
                    style={{ borderRadius: "10%" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Raleway",
                      fontWeight: 600,
                      fontSize: { xs: "12px", md: "19px" },
                      lineHeight: { xs: "16px", md: "25px" },
                      letterSpacing: "1%",
                      color: textColor,
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

          {/* Columna de la imagen (derecha en pantallas md+) */}
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
