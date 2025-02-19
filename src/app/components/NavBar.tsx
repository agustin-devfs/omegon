'use client'

import React from 'react'
import { AppBar, Toolbar,  Button } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import {statics} from '@/app/utils/statics' 

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      // color="primary" para usar el color principal del theme
      color="primary"
      sx={{
        backgroundColor: 'primary.main',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        {/* Nombre de la marca en un color destacado (info.main) */}
            <Image
              src="/assets/logo.png"
              alt="Imagen hero"
              width={100}
              height={200}
              loading="lazy"
            />
      { statics.NAV_ITEMS.map((nav,i) => (
        < div key={i}>
        <Link href={nav.link} passHref>
          <Button sx={{ color: 'info.main' }}>{nav.item}</Button>
        </Link> 
        </div>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
