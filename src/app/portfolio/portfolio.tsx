'use client';

import {
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";
import { ProjectCard } from "../components/Cards/cardService/Cardprojects";
import { motion } from "framer-motion";

const darkBg = "#17261E";
const accent = "#EDF252";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Yamila Velay",
    description:
      "Identidad visual espiritual y funcionalidad personalizada para una terapeuta holística.",
    imageUrl: "/assets/projects/yami.svg",
    link: "https://yamila-velay-landing.vercel.app/",
  },
  {
    id: 2,
    title: "Ocho&5",
    description:
      "Diseño minimalista combinado con una experiencia de usuario fluida para una marca gastronómica.",
    imageUrl: "/assets/telefono.png",
    link: "https://cinco-y-ocho.vercel.app/",
  },
];

const ProjectsSection: React.FC<{ projects?: Project[] }> = ({ projects: data = projects }) => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        bgcolor: darkBg,
        color: "common.white",
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        {/* Título animado */}
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
              sx={{
                fontWeight: 700,
                fontFamily: "Exo",
                fontSize: { xs: 40, md: 80 },
              }}
            >
              Nuestros{" "}
              <Box component="span" sx={{ color: accent }}>
                proyectos
              </Box>
            </Typography>
          </motion.div>

          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontFamily: "Exo",
              fontSize: { xs: 16, md: 20 },
              color: accent,
            }}
          >
            Soluciones digitales diseñadas con propósito y precisión
          </Typography>
        </Box>

        {/* Cards de proyectos */}
        <Grid container spacing={6}>
          {data.map((project, idx) => (
            <Grid item xs={12} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
