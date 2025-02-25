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

  const backgroundColor = theme.palette.info.main;
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
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          {/* Sección Izquierda: Título y símbolo Ω */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: { xs: "center", md: "center" },
            }}
          >
            {statics.SECTIONS_TITLE.CONTACT}
          </Typography>
          <Grid item xs={12} md={6}>
            <Image
              src="/assets/logos/logo_oscuro.png"
              alt="LogoIcon"
              loading="lazy"
              width={isSmallScreen ? 250 : 150}
              height={isSmallScreen ? 250 : 150}
              style={{ borderRadius: "10%" }}
            />
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                lineHeight: 1,
                fontSize: { xs: "1rem", sm: "3rem", md: "7rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Omegon
            </Typography>
          </Grid>

          {/* Sección Derecha: Formulario */}
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
      </Container>
    </Box>
  );
};

export default ContactSection;
