// src/components/AboutUs.tsx
import React from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import { content } from "@/app/utils/content";
import { statics } from "@/app/utils/statics";
import ShaderCanvas from "../Hero/ShaderCanvas";

// Carga dinámica para evitar SSR del Canvas
const BackgroundShader = dynamic(
  () => import("@/app/components/background/BackgroundShader"),
  { ssr: false }
);

export default function AboutUs() {
  const theme = useTheme();
  const bg = theme.palette.primary.main;
  const fg = theme.palette.info.main;
  const teamMembers = content.teamMembers;
  const { SECTIONS_TITLE, COMPANY } = statics;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: bg,
        color: fg,
        pt: { xs: 2, md: 8 },
        pb: { xs: 2, md: 4 },
        px: { xs: 1, md: 6 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Títulos */}
        <Typography
          variant="h2"
          fontSize={{ md: 96, xs: 40 }}
          sx={{ fontFamily: "Exo", fontWeight: "bold", mb: 4 }}
        >
          {SECTIONS_TITLE.ABOUT_US}
        </Typography>
        <Typography
          fontSize={{ md: 60, xs: 40 }}
          sx={{ fontFamily: "Exo", fontWeight: 600, mb: 4 }}
        >
          {COMPANY.NAME}
        </Typography>
        <Typography
          fontSize={{ md: 20, xs: 18 }}
          sx={{ fontFamily: "Exo", fontWeight: 600, mb: 1 }}
        >
          {COMPANY.TITLE}
        </Typography>
        <Typography
          fontSize={{ md: 20, xs: 18 }}
          sx={{ fontFamily: "Exo", fontWeight: 400, mb: 4 }}
        >
          {COMPANY.ABOUTUS}
        </Typography>

        {/* Grid con Shader de fondo */}
        <Grid
          container
          justifyContent="space-evenly"
          padding={{ xs: 0.5, md: 2 }}
          sx={{
            position: "relative",  // Para que el canvas absolute se ancle aquí
            borderRadius: 5,
            overflow: "hidden",    // Recorta el shader al borderRadius
          }}
        >
          {/* Canvas absoluto detrás de las cards */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,   // top:0; right:0; bottom:0; left:0
              zIndex: 0,
            }}
          >
            <BackgroundShader />

 
     </Box>

          {/* Tus cards por encima */}
          {teamMembers.map((member, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              sx={{ position: "relative", zIndex: 1 }}
            >
              <Card
                sx={{
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "none",
                  color: "white",
                  p: 2,
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    width: { xs: 150, md: 220 },
                    height: { xs: 150, md: 220 },
                    backgroundColor: "#FCD34D",
                    borderRadius: 2,
                    overflow: "hidden",
                    mx: "auto",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Exo",
                      fontWeight: "bold",
                      mt: 2,
                      textAlign: "center",
                      color: "#171A1C",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Exo",
                      mt: 1,
                      textAlign: "center",
                      color: "#171A1C",
                    }}
                  >
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
