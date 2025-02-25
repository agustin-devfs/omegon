import {  FC } from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";

export interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkNav?: string;
  index: number;
}

const CardService: FC<ServiceCardProps> = ({title, description, imageSrc, imageAlt, index }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "90vw",
        backgroundImage: "url('/assets/backgrounds/hero.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        borderRadius: 5,
        p: 4,

        // Para alinear contenido en fila y centrar verticalmente
        display: "flex",
        // En móviles (xs) será columna, en desktop (md) alternamos izquierda/derecha según index
        flexDirection: {
          xs: "column",
          md: index % 2 === 0 ? "row" : "row-reverse",
        },
        alignItems: "center",       // Centra verticalmente
        justifyContent: "center",   // Centra horizontalmente
        gap: 4,                     // Espacio entre imagen y texto
      }}
    >
      {/* Contenedor de la imagen */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Box
          sx={{
            width: { xs: 150, md: 650 },
            height: { xs: 150, md: 420 },
            borderRadius: 2,
            zindex:1
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            style={{
              //objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>

      {/* Contenedor del texto */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",     // Centra el texto horizontalmente
          justifyContent: "center",
          width: { xs: "100%", md: "50%" },
          textAlign: "center",      // Alinea el texto en el centro
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontFamily: "Exo",
            color: theme.palette.info.main,
            fontWeight: 600,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontFamily: "Exo",
            color: theme.palette.info.main,
            fontWeight: 400,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardService;
