"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Feel free to reach out by email.
      </p>

      <a
        href="mailto:murathan@yildirim.works"
        className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-medium text-gray-900 borderBlack shadow-lg transition hover:scale-105 focus:scale-105 active:scale-100 dark:bg-white/10 dark:text-white sm:text-xl"
      >
        <HiOutlineMail className="text-2xl opacity-70 transition group-hover:opacity-100" />
        murathan@yildirim.works
      </a>
    </motion.section>
  );
}
