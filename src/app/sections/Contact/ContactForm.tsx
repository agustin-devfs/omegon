"use client";

import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import sendEmail from "@/app/services/emailjs";
import ButtonCub from "@/app/components/Buttons/Cub/buton";
import { statics } from "@/app/utils/statics";

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string().email("Email inválido").required("El email es obligatorio"),
  phone: Yup.string().matches(/^[0-9\s+\-()]*$/, "Número de teléfono inválido"),
  message: Yup.string().required("El mensaje es obligatorio"),
});

const ContactSection: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const backgroundColor = theme.palette.warning.main;
  const textColor = theme.palette.primary.main;
  const formRef = useRef<HTMLFormElement>(null);

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      sendEmail(formRef.current)
        .then((success) => {
          setSubmitStatus({
            success,
            error: !success,
            message: success
              ? "¡Mensaje enviado con éxito!"
              : "Error al enviar el mensaje. Inténtalo de nuevo.",
          });
          if (success) resetForm();
        })
        .finally(() => setSubmitting(false));
    },
  });

  return (
    <Box
      component="section"
      sx={{
        backgroundColor,
        color: textColor,
        py: { xs: 2, md: 5 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ flexDirection: "column" }}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              marginBottom={{ xs: 1, md: 2 }}
              sx={{ fontFamily: "Exo", fontWeight: "bold", textAlign: "center" }}
            >
              {statics.SECTIONS_TITLE.CONTACT}
            </Typography>
          </Grid>
          <Grid
            item
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
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
                    textAlign: "center",
                  }}
                >
                  {statics.COMPANY.NAME}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <form ref={formRef} onSubmit={formik.handleSubmit}>
                  <TextField
                    required
                    label="Nombre"
                    fullWidth
                    {...formik.getFieldProps("name")}
                  />
                  <TextField
                    required
                    label="Email"
                    fullWidth
                    {...formik.getFieldProps("email")}
                  />
                  <TextField
                    label="Teléfono"
                    fullWidth
                    {...formik.getFieldProps("phone")}
                  />
                  <TextField
                    required
                    label="Mensaje"
                    multiline
                    rows={4}
                    fullWidth
                    {...formik.getFieldProps("message")}
                  />
                  {submitStatus.message && (
                    <Typography
                      color={submitStatus.success ? "success.main" : "error.main"}
                      variant="body2"
                      align="center"
                      sx={{ mb: 2 }}
                    >
                      {submitStatus.message}
                    </Typography>
                  )}
                  <Box mt={1} textAlign="center">
                    <ButtonCub
                      text="Enviar"
                      hovered="Enviar"
                      color_primary={textColor}
                      color_secondary={backgroundColor}
                      size="2rem 5rem"
                      type="submit"
                    />
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
