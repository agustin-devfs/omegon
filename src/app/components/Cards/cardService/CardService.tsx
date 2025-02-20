import { FC } from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const CardService: FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isNormalScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const Background = theme.palette.primary.main;
  const textColor = theme.palette.info.main;

  return (
    <Card
      elevation={0}
      style={{
        textAlign: "center",
        height: isMediumScreen
          ? "22rem"
          : isNormalScreen
            ? "25rem"
            : isLargeScreen
              ? "26rem"
              : "30rem",
        width: isMediumScreen
          ? "18rem"
          : isNormalScreen
            ? "20rem"
            : isLargeScreen
              ? "25rem"
              : "30rem",
        backgroundColor: Background,
        borderRadius: "25px",
        margin: "5%",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        sx={{ cursor: "pointer", }}
        pt={isSmallScreen ? 5 : isLargeScreen ? 2 : 10}
      >
        <Image
          src={imageSrc}
          width={
            isSmallScreen
              ? 80
              : isMediumScreen
                ? 100
                : isNormalScreen
                  ? 110
                  : 160
          }
          height={
            isSmallScreen
              ? 80
              : isMediumScreen
                ? 100
                : isNormalScreen
                  ? 110
                  : 160
          }
          alt={imageAlt}
          loading="lazy"
        />
      </Box>
      <Divider
        style={{
          backgroundColor: "transparent",
          padding: "1px",
          margin: "5% auto",
          height: "2px",
          width: isMediumScreen ? "70%" : "90%",
        }}
      /> 
      <Typography
        sx={{
          fontFamily: "Raleway",
          fontWeight: 700,
          color: textColor,
          fontSize: isSmallScreen
            ? "28px"
            : isMediumScreen
              ? "32px"
              : isNormalScreen
                ? "38px"
                : isLargeScreen
                  ? "42px"
                  : "46px",
          lineHeight: isMediumScreen
            ? "36px"
            : isNormalScreen
              ? "36px"
              : isLargeScreen
                ? "38px"
                : "42px",
        }}
      >
        {title}
      </Typography>
      <CardContent>
        <Typography
          style={{
            height: "100%",
            fontFamily: "Raleway",
            color: textColor,
            fontWeight: 500,
            fontSize: isSmallScreen
              ? "18px"
              : isMediumScreen
                ? "20px"
                : isLargeScreen
                  ? "24px"
                  : "26px",
            lineHeight: "35px",
            textAlign: "center",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardService;
