"use client";

import React from "react";
import type { NextPage } from "next";
import Navbar from "@/app/components/Navbar/Navbar";
import Hero from "@/app/sections/Hero/Hero";
import ServicesSection from "./sections/Services/ourServices/OurServices";
import Footer from "./sections/Footer/Footer";
import AboutUs from "./sections/AboutUs/AboutUs";
import ContactForm from "./sections/Contact/ContactForm";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="aboutus">
        <AboutUs />
      </section>

    {/* <section id="">
        
      </section> */}

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
};

export default Home;
