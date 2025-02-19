import {
  Grid,
  Box,
  Typography,
  Container,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CardService from "@/app/components/Cards/cardService/CardService";
import { statics } from "@/app/utils/statics";
import { content } from "@/app/utils/content";

const ServicesSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const Background = theme.palette.secondary.main

  return (
        <Box
          sx={{
            // Fondo verde muy oscuro (primary.main)
            backgroundColor:Background,
            // Color de texto por defecto en la sección
            color: "info.main", // Texto fosforescente
            py: { xs: 8, md: 12 }, // padding vertical (responsive)
          }}
        >

       
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: Background,     
        mt: isSmallScreen ? 4 : isMediumScreen ? 4 : isLargeScreen ? 12 : 12,
        mb: isLargeScreen ? 8 : 14,
      }}
    >
      {/* Título */}
      <Grid container justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mt: isLargeScreen ? 0 : 10,
              fontFamily: "Raleway",
              color: theme.palette.info.main, 
              fontWeight: 400,
              fontSize: isSmallScreen
                ? "30px"
                : isMediumScreen
                ? "68px"
                : isLargeScreen
                ? "80px"
                : "96px",
              lineHeight: isSmallScreen ? "56px" : "96px",
              textAlign: "center",
            }}
          >
            {statics.SECTIONS_TITLE.SERVICES}
          </Typography>
        </Grid>
      </Grid>

      {/* Tarjetas */}
      <Grid
        container
        spacing={isSmallScreen ? 0 : isMediumScreen ? 1 : 4}
        justifyContent="center"
      >
        {content.cards.map((card, index) => (
          <Grid
            item
            xs={10}
            sm={5}
            md={4}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardService
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
            />
          </Grid>
        ))}
      </Grid>

      {/* Botón */}
      <Box mt={isLargeScreen ? 1 : 10} textAlign="center">
        <Button
          href={statics.WHATSAPP.link_whatsapp}
          variant="contained"
          color="primary"
          sx={{
            fontSize: "18px",
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: "25px",
            padding: isSmallScreen ? "12px 50px" : "18px 100px",
            border: "1px solid black",
            transition: "background-color 0.3s, color 0.3s",
            "&:hover": {
              backgroundColor: "#eee",
              color: "#333",
            },
          }}
        >
          {statics.COMPANY.BUTTON.NAME}
        </Button>
      </Box>
    </Container>
    </Box>
  );
};

export default ServicesSection;
