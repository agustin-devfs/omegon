"use client";

import React from "react";
import { AppBar, Toolbar, Button, useTheme } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { statics } from "@/app/utils/statics";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const BackgroundColor = theme.palette.primary.main;
  const textColor = theme.palette.info.main;

  return (
    <AppBar
      position="static"
      sx={{
        color: { textColor },
        backgroundColor: { BackgroundColor },
        boxShadow: "none",
      }}
    >
      <Toolbar>
        {/* Nombre de la marca en un color destacado (info.main) */}
        <Image
          src="/assets/logos/logo.png"
          alt="Imagen hero"
          width={100}
          height={200}
          loading="lazy"
        />
        {statics.NAV_ITEMS.map((nav, i) => (
          <div key={i}>
            <Link href={nav.link} passHref>
              <Button sx={{ color: "info.main" }}>{nav.item}</Button>
            </Link>
          </div>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
