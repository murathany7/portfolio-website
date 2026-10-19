"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With a decade of experience in software engineering, I've developed a
        strong foundation in mobile and web application development, crafting
        seamless digital experiences that drive business growth. My expertise
        extends into AI engineering, where I leverage advanced machine learning
        algorithms to tackle complex challenges. Additionally, my deep
        understanding of blockchain technology and hands-on programming
        experience in the cryptocurrency space reflect my passion for innovation
        in emerging fields.
        <br />
        <br />
        Previously, I worked on Yuppo, a virtual assistant application designed to support parents with personalized, AI-powered assistance. My work focused primarily on backend and cloud architecture, contributing to the technical direction of the product and the systems required to bring it into production. Across these projects, I have developed strong experience in Python, backend systems, data pipelines, cloud infrastructure, and real-world AI integrations.

        <br />
        <br />
        Currently, I work as a software engineering contractor for TBI Bank, focusing on Python backend development, data engineering, and applied AI. I build end-to-end Apache Airflow pipelines that download, process, transform, and utilize large volumes of e-commerce product data, while also integrating AI APIs to create practical solutions for automation and internal business workflows.

        <br />
        <br />
        Outside work, I build hardware. Bike Logger is a ride recorder for my own bike: a Raspberry Pi 5 with GPS, motion, wheel and ultrasonic sensors and a rear camera, held in a 3D-printed tray I designed in parametric CAD, with a FastAPI backend, a web dashboard and a Flutter app that replay every ride on one timeline.

      </p>
    </motion.section>
  );
}
