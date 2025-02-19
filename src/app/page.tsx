'use client'

import React from 'react'
import type { NextPage } from 'next'
import Navbar from '@/app/components/NavBar'
import Hero from '@/app/sections/Hero/Hero'
import ServicesSection from './sections/Services/ourServices/OurServices'
import Footer from './sections/Footer/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection/>
      <Footer/>
    </>
  )
}

export default Home