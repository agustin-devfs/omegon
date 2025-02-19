"use client";

import React from "react";
import { Box, Typography, Button, Container, Grid,  } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { statics } from "@/app/utils/statics";



const Hero: React.FC= () => {
  return (
    <Box
      sx={{
        // Fondo verde muy oscuro (primary.main)
        backgroundColor: "primary.main",
        // Color de texto por defecto en la sección
        color: "info.main", // Texto fosforescente
        py: { xs: 8, md: 12 }, // padding vertical (responsive)
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Columna de texto (izquierda en pantallas md+) */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              {statics.COMPANY.NAME}
            </Typography>

            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ color: "#FFFFFF" }}
            >
             {statics.COMPANY.TEXT}
            </Typography>
            <Link href={statics.COMPANY.BUTTON.link} passHref>
              <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
               { statics.COMPANY.BUTTON.NAME}
              </Button>
            </Link>
          </Grid>

          {/* Columna de la imagen (derecha en pantallas md+) */}
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Image
              src="/assets/hero.png"
              alt="Imagen hero"
              width={600}
              height={600}
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
