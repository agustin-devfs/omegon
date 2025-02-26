import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { content } from "@/app/utils/content";
import { statics } from "@/app/utils/statics";

const { SECTIONS_TITLE, COMPANY } = statics;
const teamMembers = content.teamMembers;

export default function AboutUs() {
  const theme = useTheme();

  const backgroundColor = theme.palette.primary.main;
  const textColor = theme.palette.info.main;

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: backgroundColor,
        color: textColor,
        pt: { xs: 2, md: 8 },
        pb: { xs: 2, md: 4 },
        px: { xs: 1, md: 6 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Título principal */}
        <Typography
          variant="h2"
          fontSize={{ md: 96, xs: 40 }}
          sx={{
            fontFamily: "Exo",
            fontWeight: "bold",
            mb: 4,
          }}
        >
          {SECTIONS_TITLE.ABOUT_US}
        </Typography>

        {/* Subtítulo o texto breve */}
        <Typography
          fontSize={{ md: 60, xs: 40 }}
          sx={{
            fontFamily: "Exo",
            fontWeight: 600,
            lineHeight: { xs: "16px", md: "25px" },
            letterSpacing: "1%",
            color: textColor,
            mb: 4,
          }}
        >
          {COMPANY.NAME}
        </Typography>

        <Typography
          fontSize={{ md: 20, xs: 18 }}
          sx={{
            fontFamily: "Exo",
            fontWeight: 600,
            lineHeight: { xs: "16px", md: "25px" },
            letterSpacing: "1%",
            color: theme.palette.info.main,
            mb: 1,
          }}
        >
          {COMPANY.TITLE}
        </Typography>

        <Typography
          fontSize={{ md: 20, xs: 18 }}
          sx={{
            fontFamily: "Exo",
            fontWeight: 400,
            lineHeight: { xs: "20px", md: "25px" },
            letterSpacing: "2%",
            color: theme.palette.info.main,
            mb: 4,
          }}
        >
          {COMPANY.TEXT}
        </Typography>

        {/* Grilla de miembros del equipo */}
        <Grid
          container
          justifyContent="space-evenly" // space-between
          padding={{ xs: 0.5, md: 2 }}
          sx={{
            backgroundImage: "url('/assets/backgrounds/about-us.png')", // Ruta de la imagen
            backgroundSize: "cover", // Ajusta la imagen para que cubra el área
            backgroundPosition: "center", // Centra la imagen
            backgroundRepeat: "no-repeat", // Evita que se repita
            borderRadius: 5,
          }}
        >
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: "transparent",
                  border: "none", // Asegura que no haya borde
                  boxShadow: "none", // También elimina cualquier sombra que pueda parecer un borde
                  color: "white",
                  p: 2,
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 150, md: 220 },
                      height: { xs: 150, md: 220 },
                      backgroundColor: "#FCD34D",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      loading="lazy"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Exo",
                        fontWeight: "bold",
                        mt: 2,
                        textAlign: "center",
                        color: textColor,
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Exo",
                        color: textColor,
                        mt: 1,
                        textAlign: "center",
                      }}
                    >
                      {member.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
