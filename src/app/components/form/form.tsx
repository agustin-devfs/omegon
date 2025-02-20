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
          borderRadius: 1,
          backgroundColor: "transparent",
          // Color de la etiqueta
          "& .MuiInputLabel-root": {
            color: textColor,
          },
          // Color del borde y estados hover/focus
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: textColor,
            },
            "&:hover fieldset": {
              borderColor: textColor,
            },
            "&.Mui-focused fieldset": {
              borderColor: textColor,
            },
          },
          // Color del texto ingresado
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
          borderRadius: 1,
          backgroundColor: "transparent",
          "& .MuiInputLabel-root": {
            color: textColor,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: textColor,
            },
            "&:hover fieldset": {
              borderColor: textColor,
            },
            "&.Mui-focused fieldset": {
              borderColor: textColor,
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
          borderRadius: 1,
          backgroundColor: "transparent",
          "& .MuiInputLabel-root": {
            color: textColor,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: textColor,
            },
            "&:hover fieldset": {
              borderColor: textColor,
            },
            "&.Mui-focused fieldset": {
              borderColor: textColor,
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
          borderRadius: 1,
          backgroundColor: "transparent",
          "& .MuiInputLabel-root": {
            color: textColor,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: textColor,
            },
            "&:hover fieldset": {
              borderColor: textColor,
            },
            "&.Mui-focused fieldset": {
              borderColor: textColor,
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
