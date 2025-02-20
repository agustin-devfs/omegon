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
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import { Instagram } from "@mui/icons-material";

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (): void => {
    setDrawerOpen(open);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHero = () => {
    const HeroSection = document.getElementById("Hero");
    if (HeroSection) {
      HeroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems: MenuItem[] = [
    {
      text: "Inicio",
      icon: <CalendarMonthIcon />,
      onClick: () => console.log("inicio"),
    },
    {
      text: "nuestros servicios",
      icon: <DescriptionIcon />,
      onClick: () => console.log("servicios"),
    },
    {
      text: "sobre nosotros",
      icon: <LanguageIcon />,
      onClick: () => console.log("nosotros"),
    },
    {
      text: "contactanos",
      icon: <LanguageIcon />,
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
        sx={{ cursor: "pointer", padding: "20px", position: "relative" }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            color: "white",
            padding: "16px",
          }}
        >
          <CloseIcon onClick={toggleDrawer(false)} />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ cursor: "pointer", pt: "16px" }}
        >
          <Image
            src={"/assets/logos/logo.png"}
            width={50}
            height={50}
            alt="Omegon"
            style={{ minHeight: "40px", maxHeight: "55px", maxWidth: "60px" }}
          />
        </Box>
      </Box>
      <List onClick={toggleDrawer(false)}>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            onClick={item.onClick}
            sx={{ color: "white", py: "5px", mx: 4 }}
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
        sx={{ backgroundColor: "black", height: "60px" }}
      >
        <Toolbar sx={{ height: "100%", minHeight: "unset" }}>
          <IconButton
            edge="start"
            color="inherit"
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
              src={"/assets/logos/logo.png"}
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
            width: { xs: "100%", sm: "35%" },
            backgroundColor: "black",
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
