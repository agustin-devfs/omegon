"use client";

import React, { useState, useRef } from "react";
import { TextField, useTheme, Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

// Define el esquema de validación con Yup
const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  phone: Yup.string()
    .matches(/^[0-9\s+\-()]*$/, "Número de teléfono inválido"),
  message: Yup.string().required("El mensaje es obligatorio"),
});

const Form = () => {
  const theme = useTheme();
  const textColor = theme.palette.primary.main;
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: "",
  });
/*   const [captchaVerified, setCaptchaVerified] = useState(false);
 */  const formRef = useRef(null);
  // Definimos correctamente el tipo del ref para reCAPTCHA
  const recaptchaRef = useRef<ReCAPTCHA>(null);

 
  // Configuración de EmailJS
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  
 /*  const handleCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value);
  }; */

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
     /*  if (!captchaVerified) {
        setSubmitStatus({
          success: false,
          error: true,
          message: "Por favor, verifica que no eres un robot",
        });
        setSubmitting(false);
        return;
      } */

        emailjs
        .send(SERVICE_ID || "", TEMPLATE_ID || "", {
          from_name: values.name,
          from_email: values.email,
          from_phone: values.phone,
          message: values.message,
        }, PUBLIC_KEY)
        .then(response => {
          console.log("Email enviado:", response);
          setSubmitStatus({
            success: true,
            error: false,
            message: "¡Mensaje enviado con éxito!",
          });
          resetForm();
/*           setCaptchaVerified(false);
 */          if (recaptchaRef.current) recaptchaRef.current.reset();
        })
        .catch(error => {
          console.error("Error al enviar email:", error);
          setSubmitStatus({
            success: false,
            error: true,
            message: "Error al enviar el mensaje. Inténtalo de nuevo.",
          });
        })
        .finally(() => setSubmitting(false));
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
    <Box component="div" ref={formRef}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          required
          label="Nombre"
          variant="outlined"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          fullWidth
          sx={getTextFieldStyle()}
        />

        <TextField
          required
          label="Email"
          variant="outlined"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
          sx={getTextFieldStyle()}
        />

        <TextField
          label="Teléfono"
          variant="outlined"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          fullWidth
          sx={getTextFieldStyle()}
        />

        <TextField
          required
          label="Mensaje"
          variant="outlined"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          multiline
          rows={4}
          fullWidth
          sx={getTextFieldStyle()}
        />

        <Box mt={2} mb={2} display="flex" justifyContent="center">
      {/*     <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.ReCAPTCHA? process.env.ReCAPTCHA : ""}// Reemplaza con tu Site Key de reCAPTCHA
            onChange={handleCaptchaChange}
          /> */}
        </Box>

        {submitStatus.success && (
          <Typography
            color="success.main"
            variant="body2"
            align="center"
            sx={{ mb: 2 }}
          >
            {submitStatus.message}
          </Typography>
        )}

        {submitStatus.error && (
          <Typography
            color="error"
            variant="body2"
            align="center"
            sx={{ mb: 2 }}
          >
            {submitStatus.message}
          </Typography>
        )}

        <input type="hidden" name="form-name" value="contact" />
        
        </form>
    </Box>
  );
};

export default Form;