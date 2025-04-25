import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, useTheme } from "@mui/material";
import { statics } from "@/app/utils/statics";
import LordIcon from "../iconos/LordIcon";

interface MenuItem {
  text: string;
  iconSrc: string;
  onClick: () => void;
}

const Navbar: React.FC = () => {
  const theme = useTheme();

  const backgroundColorOscuro = theme.palette.primary.main;
 // const backgroundColorClaro = theme.palette.info.main;
  const backgroundColorMedio = theme.palette.primary.main;

  const textColorOscuro = theme.palette.warning.main;
  const textColorClaro = theme.palette.info.main;

  const { SECTIONS_TITLE, COMPANY } = statics;

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (): void => {
    setDrawerOpen(open);
  };

  const scrollToHero = () => {
    const HeroSection = document.getElementById("hero");
    if (HeroSection) {
      HeroSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToServices = () => {
    const HeroSection = document.getElementById("services");
    if (HeroSection) {
      HeroSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutUs = () => {
    const HeroSection = document.getElementById("aboutus");
    if (HeroSection) {
      HeroSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems: MenuItem[] = [
    {
      text: SECTIONS_TITLE.HOME,
      iconSrc:"https://cdn.lordicon.com/jeuxydnh.json",
      onClick: scrollToHero,
    },
    {
      text: SECTIONS_TITLE.SERVICES,
      iconSrc:"https://cdn.lordicon.com/gvtjlyjf.json",
      onClick: scrollToServices,
    },
    {
      text: SECTIONS_TITLE.ABOUT_US,
      iconSrc:"https://cdn.lordicon.com/tebysptx.json",
      onClick: scrollToAboutUs,
    },
    {
      text: SECTIONS_TITLE.CONTACT,
      iconSrc:"https://cdn.lordicon.com/vpbspaec.json",
      onClick: scrollToContact,
    },

    {
      text: "Instagram",
      iconSrc:"https://cdn.lordicon.com/tgyvxauj.json",
      onClick: () => window.open("/", "_blank"),
    },
  ];

  const drawer = (
    <Box sx={{ textAlign: "center", fontFamily: "Exo", }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          cursor: "pointer",
          padding: "10px",
          position: "relative",
          backgroundColor: backgroundColorOscuro,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            color: textColorClaro,
            padding: "16px",
            backgroundColor: backgroundColorMedio,
          }}
        >
          <CloseIcon onClick={toggleDrawer(false)} />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          alignContent={"center"}
          sx={{ cursor: "pointer", backgroundColor: backgroundColorMedio, margin: "auto" }}
        >
          <Image
            src={"/assets/logos/logo_claro.png"}
            width={50}
            height={50}
            alt="Omegon"
            style={{
              minHeight: "40px",
              maxHeight: "55px",
              maxWidth: "60px",
              top: "50%",
              left: "55%",
            }}
          />

          <Typography
          fontSize={{ xs: 40, md: 52 }}
          margin={{ xs: 1, md: 2 }}
            sx={{
              fontFamily: "Exo",
              fontWeight: 600,
              lineHeight: { xs: "16px", md: "20px" },
              letterSpacing: "1%",
              color: textColorClaro,
              mb: 0,
            }}
          >
            {COMPANY.NAME}
          </Typography>
        </Box>
      </Box>
      <List sx={{ p: 0 }} onClick={toggleDrawer(false)}>
  {menuItems.map((item, index) => (
    <ListItemButton
      key={index}
      onClick={item.onClick}
      sx={{ color: textColorOscuro, mb: 1, ml: 0.5 }}
    >
      {item.iconSrc && (
        <LordIcon
          src={item.iconSrc}
          trigger="in"
          delay="200"
          state="in-reveal"
          colors={`primary:${textColorClaro},secondary:${textColorOscuro}`}
          style={{ width: 40, height: 40 }}
        />
      )}

      <ListItemText
        primary={item.text}
        primaryTypographyProps={{
          sx: {
            fontFamily: "Exo, sans-serif",
            fontSize: "1.3rem",      // ↔ 24px; ajústalo a tu gusto
            fontWeight: 600,
            ml: 1,                   // margen izquierdo
            lineHeight: 1.2,
            letterSpacing: "0.05em",
           color:textColorClaro
          },
        }}
      />
    </ListItemButton>
  ))}
</List>

    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: backgroundColorOscuro, height: "70px" }}
      >
        <Toolbar sx={{ height: "100%", minHeight: "unset" }}>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, color: textColorClaro }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: { xs: 1, sm: 2 },
              display: { xs: "block", sm: "block" },
            }}
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
            sx={{ cursor: "pointer" }}
            mb={1}
            onClick={scrollToHero}
          >
            <Image
              src={"/assets/logos/logo_claro.png"}
              width={60}
              height={60}
              alt="Omegon"
            />
          </Box>
          <Box
            sx={{
              flexGrow: { xs: 1, sm: 2.2 },
              display: { xs: "block", sm: "block" },
            }}
          />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: "block",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: "100%", sm: "25%" },
            backgroundColor: backgroundColorMedio,
            overflow: "hidden",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
