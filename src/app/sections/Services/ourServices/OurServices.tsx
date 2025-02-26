import {
  Grid,
  Box,
  Typography,
  Container,
  //Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { statics } from "@/app/utils/statics";
import { content } from "@/app/utils/content";
import ButtonCub from "@/app/components/Buttons/Cub/buton";
import CardServices from "@/app/components/Cards/cardService/CardServices";

const ServicesSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const Background = theme.palette.success.main;
  const textColor = theme.palette.info.main;

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        // Fondo verde muy oscuro (primary.main)
        backgroundColor: Background,
        color: textColor,
        py: { xs: 0.5, md: 1 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: Background,
          mt: 1,
          mb: isLargeScreen ? 2 : 4,
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
                fontFamily: "Exo",
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
          flexDirection={"column"}
          alignItems={"center"}
        >
          {content.cards.map((card, index) => (
            <Grid
              item
              xs={4}
              sm={10}
              md={12}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardServices
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                linkNav={card.linkNav}
                index={index}
                title={card.title}
                description={card.description}
              />
            </Grid>
          ))}
        </Grid>

        {/* Botón */}
        <Box
          mt={isLargeScreen ? 1 : 10}
          textAlign="center"
          onClick={scrollToContact}
        >
          <ButtonCub
            text={statics.COMPANY.BUTTON.NAME}
            hovered={statics.COMPANY.BUTTON.NAME}
            color_primary={Background}
            color_secondary={textColor}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
