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
        Currently, I play a key role in developing a virtual assistant designed
        for parents, where I focus primarily on the cloud and backend
        architecture. Beyond just engineering, I take on a crucial position,
        shaping the project's technical direction and ensuring its successful
        deployment. This initiative is backed by a company named Insider, a
        major player in the software industry. Bringing together my skills in
        AI, cloud infrastructure, and blockchain, I am committed to driving
        impactful, forward-thinking technological solutions.
      </p>
    </motion.section>
  );
}
