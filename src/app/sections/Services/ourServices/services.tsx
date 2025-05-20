// src/components/ServicesloveSection.tsx
"use client"

import React from "react";
import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import { Code, Smartphone, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: <Code size={24} />,
    title: "Desarrollo Web",
    description:"Llevamos tu visión al mundo digital con plataformas web sólidas, innovadoras y estratégicas, diseñadas para impulsar tu crecimiento.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Desarrollo de Apps",
    description:        "Creamos aplicaciones a medida que combinan tecnología y creatividad, ofreciendo soluciones eficientes y adaptadas a las necesidades del mercado.",
  },
  {
    icon: <LayoutDashboard size={24} />,
    title: "Diseño UX/UI",
    description:
    "Diseñamos experiencias intuitivas y atractivas que generan conexión con los usuarios y potencian la identidad de tu marca.",
},
];

const ServicesloveSection: React.FC = () => {
  const theme = useTheme();
  const darkBg = "#17261E";
  const cardBg = "#1E2A26";
  const accent = "#EDF252";

  return (
    <Box
      component="section"
      id="services"
      sx={{
        bgcolor: darkBg,
        color: "common.white",
        py: 8,
        px: 2,
      }}
    >
      <Box maxWidth="lg" mx="auto">
        {/* Título */}
        <Box textAlign="center" mb={6}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: 700, fontFamily: "Exo", fontSize: 80 }}
            >
              Nuestros{" "}
              <Box
                component="span"
                sx={{ color: accent }}
              >
                servicios
              </Box>
            </Typography>
          </motion.div>
          </Box>

        {/* Grid de cards */}
        <Grid container spacing={4}>
          {SERVICES.map((svc, idx) => (
            <Grid item xs={12} md={4} key={svc.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: cardBg,
                    borderRadius: 3,
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: accent,
                      boxShadow: `0 0 20px ${accent}33`,
                    },
                  }}
                >
                  {/* Ícono */}
                  <Box
                    sx={{
                      bgcolor: `${accent}20`,
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    <Box sx={{ color: accent }}>{svc.icon}</Box>
                  </Box>

                  {/* Texto */}
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 600, mb: 1, color: theme.palette.info.main,}}
                  >
                    {svc.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.grey[400], flexGrow: 1 }}
                  >
                    {svc.description}
                  </Typography>

                  {/* Línea de acento */}
                  <Box
                    sx={{
                      width: 48,
                      height: 3,
                      bgcolor: accent,
                      mt: 4,
                    }}
                  />
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesloveSection;
