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
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import { Instagram } from "@mui/icons-material";
import { Typography, useTheme } from "@mui/material";
import { statics } from "@/app/utils/statics";

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const Navbar: React.FC = () => {
  const theme = useTheme();

  const backgroundColor = theme.palette.info.main;
  const textColor = theme.palette.primary.main;
  const textColor2 = theme.palette.info.main;

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
      icon: <HomeIcon />,
      onClick: scrollToHero,
    },
    {
      text: SECTIONS_TITLE.SERVICES,
      icon: <CalendarMonthIcon />,
      onClick: scrollToServices,
    },
    {
      text: SECTIONS_TITLE.ABOUT_US,
      icon: <DescriptionIcon />,
      onClick: scrollToAboutUs,
    },
    {
      text: SECTIONS_TITLE.CONTACT,
      icon: <EmailIcon />,
      onClick: scrollToContact,
    },

    {
      text: "Instagram",
      icon: <Instagram />,
      onClick: () => window.open("/", "_blank"),
    },
  ];

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          cursor: "pointer",
          padding: "10px",
          position: "relative",
          backgroundColor: textColor,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            color: textColor2,
            padding: "16px",
            backgroundColor: textColor,
          }}
        >
          <CloseIcon onClick={toggleDrawer(false)} />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          alignContent={"center"}
          sx={{ cursor: "pointer", backgroundColor: textColor }}
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
            }}
          />

          <Typography
            sx={{
              fontFamily: "exo",
              fontWeight: 600,
              fontSize: { xs: "12px", md: "52px" },
              lineHeight: { xs: "16px", md: "25px" },
              letterSpacing: "1%",
              color: theme.palette.info.main,
              mb: 0,
            }}
          >
            {COMPANY.NAME}
          </Typography>
        </Box>
      </Box>
      <List sx={{ padding: "0px" }} onClick={toggleDrawer(false)}>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            onClick={item.onClick}
            sx={{
              color: textColor,
              border: "1px solid",
              borderBottom: "1px solid",
            }}
          >
            {item.icon && (
              <Box component="span" sx={{ marginRight: 2 }}>
                {item.icon}
              </Box>
            )}
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: backgroundColor, height: "60px" }}
      >
        <Toolbar sx={{ height: "100%", minHeight: "unset" }}>
          <IconButton
            edge="start"
            //color={textColor}
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
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
              src={"/assets/logos/logo_oscuro.png"}
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
            backgroundColor: backgroundColor,
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
