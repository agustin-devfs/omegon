'use client';

import {
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";
import { ProjectCard } from "../components/Cards/cardService/Cardprojects";
import { motion } from "framer-motion";
import { Project } from "../utils/content";

const darkBg = "#17261E";
const accent = "#EDF252";



const ProjectsSection: React.FC<{ projects?: Project[] }> = ({ projects }) => 
  {  return (
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
                {projects && projects.length > 0 ? projects[0].title : ""}
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
          {(projects ?? [])
            .filter(project => project.id !== 0)
            .map((project, idx) => (
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
