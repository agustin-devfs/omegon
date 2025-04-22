"use client";

import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  useTheme,
  useMediaQuery,
  Dialog,
} from "@mui/material";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import sendEmail from "@/app/services/emailjs";
import ButtonCub from "@/app/components/Buttons/Cub/buton";
import { statics } from "@/app/utils/statics";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CalendlyModal from "@/app/components/Calendly/CalendyModal";

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  phone: Yup.string().matches(/^[0-9\s+\-()]*$/, "Numero de telefono invalido"),
  message: Yup.string().required("El mensaje es obligatorio"),
});

const ContactSection: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const backgroundColor = theme.palette.warning.main;
  const textColor = theme.palette.primary.main;
  const formRef = useRef<HTMLFormElement>(null);
  const [openCalendly, setOpenCalendly] = useState(false);
  const calendlyUrl = "https://calendly.com/omegon-info/30min";

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const success = await sendEmail(formRef.current);

      if (success) {
        toast.success("¡Mensaje enviado con éxito!");

        resetForm();
      } else {
        toast.error("Error al enviar el mensaje. Inténtalo de nuevo.");
      }

      setSubmitting(false);
    },
  });

  const getTextFieldStyle = () => ({
    borderRadius: 0,
    backgroundColor: "transparent",
    marginBottom: theme.spacing(2),
    "& .MuiInputLabel-root": {
      color: textColor,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
        borderBottom: `2px solid ${textColor}`,
      },
      "&:hover fieldset": {
        border: "none",
        borderBottom: `2px solid ${textColor}`,
      },
      "&.Mui-focused fieldset": {
        border: "none",
        borderBottom: `2px solid ${textColor}`,
      },
      "&.Mui-error fieldset": {
        borderBottom: `2px solid ${theme.palette.error.main}`,
      },
    },
    "& .MuiInputBase-input": {
      color: textColor,
    },
    "& .MuiFormHelperText-root": {
      color: theme.palette.error.main,
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
              marginBottom={{ xs: 1, md: 1 }}
              sx={{
                fontFamily: "Exo",
                fontWeight: "bold",
                textAlign: "center",
              }}
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
                    id="name"
                    fullWidth
                    sx={{ ...getTextFieldStyle() }}
                    {...formik.getFieldProps("name")}
                  />
                  <TextField
                    required
                    label="Email"
                    id="email"
                    fullWidth
                    sx={{ ...getTextFieldStyle() }}
                    {...formik.getFieldProps("email")}
                  />
                  <TextField
                    label="Telefono"
                    id="phone"
                    fullWidth
                    sx={{ ...getTextFieldStyle() }}
                    {...formik.getFieldProps("phone")}
                  />
                  <TextField
                    required
                    label="Mensaje"
                    id="message"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{ ...getTextFieldStyle() }}
                    {...formik.getFieldProps("message")}
                  />
                  <Box
                    mt={1}
                    textAlign="center"
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    alignItems="center"
                  >
                    <ButtonCub
                      text="Enviar"
                      hovered="Enviar"
                      color_primary={textColor}
                      color_secondary="#EDF252"
                      size="2rem 5rem"
                      type="submit"
                    />
                  </Box>
                </form>

                {/* BOTON para abrir modal Calendly */}
                <Box mt={4} textAlign="center">
                  <button
                    type="button"
                    onClick={() => setOpenCalendly(true)}
                    style={{
                      padding: ".75rem 1rem",
                      fontFamily: "Exo",
                      fontSize: "1.2rem",
                      fontWeight: "500",
                      border: `2px solid ${textColor}`,
                      backgroundColor: theme.palette.info.main,
                      color: textColor,
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    Agenda tu cita
                  </button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* MODAL Calendly */}
      <Dialog
        open={openCalendly}
        onClose={() => setOpenCalendly(false)}
        fullWidth
        maxWidth="md"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          overflow: "hidden",
        }}
        BackdropProps={{
          sx: {
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0,0,0,0.4)",
          },
        }}
      >
        <CalendlyModal
          open={openCalendly}
          onClose={() => setOpenCalendly(false)}
          calendlyUrl={calendlyUrl}
        />
      </Dialog>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
      />
    </Box>
  );
};

export default ContactSection;
