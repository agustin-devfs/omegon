"use client";

import React from "react";
import type { NextPage } from "next";
import Navbar from "@/app/components/Navbar/Navbar";
import Hero from "@/app/sections/Hero/Hero";
import Footer from "@/app/sections/Footer/Footer";
import ContactForm from "@/app/sections/Contact/ContactForm";
import ProjectsSection from "@/app/portfolio/portfolio";


const pageID = "portfolio";

const Portfolio: NextPage = () => {
  return (
    <>
      <Navbar page={pageID} />
      <section id="hero">
    <Hero page={pageID}/>
      </section>
      <section id="services">
    <ProjectsSection/>
    </section>
      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;
