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
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 6 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Título principal */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          {SECTIONS_TITLE.ABOUT_US}
        </Typography>

        {/* Subtítulo o texto breve */}
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontWeight: 600,
            fontSize: { xs: "12px", md: "52px" },
            lineHeight: { xs: "16px", md: "25px" },
            letterSpacing: "1%",
            color: theme.palette.info.main,
            mb: 4,
          }}
        >
          {COMPANY.NAME}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Raleway",
            fontWeight: 600,
            fontSize: { xs: "12px", md: "22px" },
            lineHeight: { xs: "16px", md: "25px" },
            letterSpacing: "1%",
            color: theme.palette.info.main,
            mb: 1,
          }}
        >
          {COMPANY.TITLE}
        </Typography>

        <Typography
         
          sx={{
            fontFamily: "Raleway",
            fontWeight: 600,
            fontSize: { xs: "12px", md: "22px" },
            lineHeight: { xs: "16px", md: "25px" },
            letterSpacing: "1%",
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
          sx={{
            backgroundColor: "black",
            borderRadius: 5,
            p: 4,
          }}
        >
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} >
              <Card
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  p: 4,
                  borderRadius: 2,
                  boxShadow: 4,
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
                  {/*   <Image
                      src={member.image}
                      alt={member.name}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    /> */}
                  </Box>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mt: 2, textAlign: "center",color: textColor }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: textColor, mt: 1, textAlign: "center" }}
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
