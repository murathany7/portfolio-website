"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaBicycle, FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/Murathan_.JPG"
              alt="Murathan portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Murathan Yildirim.</span> I'm a{" "}
        <span className="font-bold">software engineer</span> who builds{" "}
        <span className="font-bold">backend, AI and hardware</span> based in{" "}
        {/* <span className="italic">best city of the world</span>,{" "} */}
        <span className="underline">Rotterdam, Netherlands</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* Plain link: /bike-logger is a static page in public/, outside the app router */}
        <a
          href="/bike-logger"
          className="group relative flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-10 py-5 text-xl font-semibold text-white shadow-[0_10px_40px_-8px_rgba(147,51,234,0.7)] outline-none ring-4 ring-white/60 transition hover:scale-110 hover:shadow-[0_14px_50px_-6px_rgba(219,39,119,0.8)] focus:scale-110 active:scale-105 dark:ring-white/10 sm:text-2xl"
        >
          <span className="absolute -inset-1 -z-10 animate-pulse rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-lg" />
          <FaBicycle className="text-3xl transition group-hover:-rotate-12" />
          See Bike Logger
          <BsArrowRight className="transition group-hover:translate-x-1.5" />
        </a>

        {/* <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a> */}

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/murathan-y%C4%B1ld%C4%B1r%C4%B1m-2b3a90291/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/murathany7"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
