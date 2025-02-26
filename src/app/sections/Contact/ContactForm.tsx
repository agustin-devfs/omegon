import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

import ButtonCub from "@/app/components/Buttons/Cub/buton";
import Form from "@/app/components/form/form";
import { statics } from "@/app/utils/statics";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const backgroundColor = theme.palette.warning.main;
  const textColor = theme.palette.primary.main;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: backgroundColor,
        color: textColor,
        py: { xs: 2, md: 5 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        {/* Contenedor principal en columna para colocar el título arriba y las dos columnas debajo */}
        <Grid container spacing={4} sx={{ flexDirection: "column" }}>
          {/* Grid item para el título, centrado en toda la sección */}
          <Grid item xs={12}>
            <Typography
              variant="h3"
              marginBottom={{ xs: 1, md: 2 }}
              sx={{
                fontFamily: "Exo",
                fontWeight: "bold",
                textAlign: "center", // Centramos el texto
              }}
            >
              {statics.SECTIONS_TITLE.CONTACT}
            </Typography>
          </Grid>

          {/* Grid container para dividir en dos columnas: logo/OMEGON a la izquierda y formulario a la derecha */}
          <Grid
            item
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            {/* Columna izquierda: Logo y texto OMEGON, ambos centrados */}
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/assets/logos/logo_oscuro.png"
                  alt="LogoIcon"
                  loading="lazy"
                  width={isSmallScreen ? 120 : 250}
                  height={isSmallScreen ? 120 : 250}
                  style={{ borderRadius: "10%" }}
                />
                <Typography
                  variant="h1"
                  fontSize={{ md: 80, xs: 70 }}
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Exo",
                    lineHeight: 1,
                    mt: 2,
                    textAlign: "center", // Centramos el texto
                  }}
                >
                  {statics.COMPANY.NAME}
                </Typography>
              </Box>
            </Grid>

            {/* Columna derecha: Formulario */}
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Form />

                <Box mt={1} textAlign="center">
                  <ButtonCub
                    text={"submit"}
                    hovered={"submit"}
                    color_primary={textColor}
                    color_secondary={backgroundColor}
                    size="2rem 5rem"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
