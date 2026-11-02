"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaBicycle, FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.25 }}
      >
        <Image
          src="/Murathan_.JPG"
          alt="Murathan Yıldırım"
          width="192"
          height="192"
          quality="95"
          priority={true}
          className="h-28 w-28 rounded-full object-cover shadow-lg ring-4 ring-white dark:ring-white/10"
        />
      </motion.div>

      <motion.p
        className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-white/50"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Software engineer · Rotterdam, Netherlands
      </motion.p>

      <motion.h1
        className="mb-10 mt-4 px-4 text-3xl font-semibold tracking-tight !leading-[1.2] sm:text-5xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I&apos;m Murathan Yıldırım.{" "}
        <span className="text-gray-500 dark:text-white/50">
          I build backend, AI and hardware.
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* Plain link: /bike-logger is a static page in public/, outside the app router */}
        <a
          href="/bike-logger"
          className="group flex items-center gap-2.5 rounded-full bg-gray-950 px-7 py-3.5 font-semibold text-white shadow-lg outline-none transition hover:bg-gray-800 focus:bg-gray-800 active:scale-[0.98] dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
        >
          <FaBicycle className="text-xl" />
          See Bike Logger
          <BsArrowRight className="transition group-hover:translate-x-1" />
        </a>

        <a
          href="mailto:murathan@yildirim.works"
          className="group flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-7 py-3.5 font-semibold text-gray-900 outline-none transition hover:bg-white focus:bg-white active:scale-[0.98] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          <HiOutlineMail className="text-lg opacity-70" />
          Get in touch
        </a>

        <div className="flex gap-3">
          <a
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/80 text-lg text-gray-700 transition hover:bg-white hover:text-gray-950 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:text-white"
            href="https://www.linkedin.com/in/murathan-y%C4%B1ld%C4%B1r%C4%B1m-2b3a90291/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/80 text-xl text-gray-700 transition hover:bg-white hover:text-gray-950 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:text-white"
            href="https://github.com/murathany7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
