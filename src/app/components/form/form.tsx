import React, { useState } from "react";
import { TextField, useTheme } from "@mui/material";
import { ContactFormData } from "@/app/sections/Contact/ContactForm";

const Form: React.FC = () => {
  const theme = useTheme();

  const textColor = theme.palette.primary.main;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <TextField
        required
        label="Name"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        sx={{
          borderRadius: 0,
          backgroundColor: "transparent",
          "& .MuiInputLabel-root": {
            color: textColor,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              // Quitamos el borde normal y dejamos solo el inferior
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
          },
          "& .MuiInputBase-input": {
            color: textColor,
          },
        }}
      />

      <TextField
        required
        label="Email"
        variant="outlined"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        sx={{
          borderRadius: 0,
          backgroundColor: "transparent",
          "& .MuiInputLabel-root": {
            color: textColor,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              // Quitamos el borde normal y dejamos solo el inferior
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
          },
          "& .MuiInputBase-input": {
            color: textColor,
          },
        }}
      />

      <TextField
        label="Phone"
        variant="outlined"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        sx={{
          borderRadius: 0,
          backgroundColor: "transparent",
          "& .MuiInputLabel-root": {
            color: textColor,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              // Quitamos el borde normal y dejamos solo el inferior
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
          },
          "& .MuiInputBase-input": {
            color: textColor,
          },
        }}
      />

      <TextField
        required
        label="Message"
        variant="outlined"
        name="message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        sx={{
          borderRadius: 0,
          backgroundColor: "transparent",
          "& .MuiInputLabel-root": {
            color: textColor,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              // Quitamos el borde normal y dejamos solo el inferior
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
          },
          "& .MuiInputBase-input": {
            color: textColor,
          },
        }}
      />
    </>
  );
};

export default Form;
