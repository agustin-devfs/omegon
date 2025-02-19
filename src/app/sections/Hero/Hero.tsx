"use client";

import React from "react";
import { Box, Typography, Button, Container, Grid, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { statics } from "@/app/utils/statics";

const Hero: React.FC = () => {
  const theme = useTheme();
  const Background = theme.palette.success.main;
  
  return (
    <Box
      sx={{
        backgroundColor: Background,
        color: "info.main", // Texto fosforescente
        py: { xs: 8, md: 12 }, // padding vertical (responsive)
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Columna de texto (izquierda en pantallas md+) */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              fontSize={90}
              sx={{ fontWeight: "bold", mb: 2, zIndex: 1 }}
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

            <Link href={statics.COMPANY.BUTTON.link} passHref>
              <Button variant="contained" color="secondary">
                {statics.COMPANY.BUTTON.NAME}
              </Button>
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
