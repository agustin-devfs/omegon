"use client";

import React, { useState } from "react";
import { AppBar, Toolbar, Button, useTheme, Container, Grid, IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { statics } from "@/app/utils/statics";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const BackgroundColor = theme.palette.info.main;
  const textColor = theme.palette.primary.main;

  // Estado para el menú hamburguesa
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: BackgroundColor,
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Image
            src="/assets/logos/logo.png"
            alt="Logo"
            width={80}
            height={40}
            loading="lazy"
          />

          {/* Menú para Desktop */}
          {!isMobile ? (
            <Grid container spacing={2} sx={{ justifyContent: "flex-end" }}>
              {statics.NAV_ITEMS.map((nav, i) => (
                <Grid key={i} item>
                  <Link href={nav.link} passHref>
                    <Button sx={{ color: textColor }}>{nav.item}</Button>
                  </Link>
                </Grid>
              ))}
            </Grid>
          ) : (
            // Menú Hamburguesa en Mobile
            <>
              <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                keepMounted
              >
                {statics.NAV_ITEMS.map((nav, i) => (
                  <MenuItem key={i} onClick={handleMenuClose}>
                    <Link href={nav.link} passHref>
                      <Button sx={{ color: "black", width: "100%" }}>{nav.item}</Button>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
