import { Box, Grid, Paper, Typography, Button, useTheme } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  id: string | number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const darkBg = "#17261E";
const cardBg = "#1E2A26";
const accent = "#EDF252";

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={0}
        sx={{
          bgcolor: cardBg,
          borderRadius: 3,
          overflow: "hidden",
          border: "2px solid transparent",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: accent,
            boxShadow: `0 0 20px ${accent}33`,
          },
        }}
      >
        <Grid container>
           <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 200,
            }}
          >
            <Box
              sx={{
                position: "relative",
                 marginTop: 7,
              }}
            >
              <Image
                src={project.imageUrl || "/assets/telefono.png"}
                alt={project.title}
                height={200}
                width={200}
                quality={80}

              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ p: 4 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 1,
                fontFamily: "Exo",
                color: theme.palette.info.main,
              }}
            >
              {project.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: theme.palette.grey[400], mb: 2, fontFamily: "Exo" }}
            >
              {project.description}
            </Typography>

            <Button
              aria-label="Ver proyecto"
              href={project.link}
              variant="outlined"
              endIcon={<ArrowRight />}
              
              target="_blank"
              rel="noopener noreferrer"
              
              sx={{
                borderColor: accent,
                color: accent,
                fontFamily: "Exo",
                fontWeight: 600,
                mt: 2,
                "&:hover": {
                  backgroundColor: accent,
                  color: darkBg,
                },
               
             }}
            >
              Ver proyecto
            </Button>

            <Box
              sx={{
                width: 48,
                height: 3,
                bgcolor: accent,
                mt: 4,
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
};
