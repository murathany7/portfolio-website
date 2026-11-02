"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsArrowUpRight, BsBoxSeam, BsCpu, BsJournalText } from "react-icons/bs";
import { FaBicycle } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { bikeLoggerData } from "@/lib/data";
import bikelogger from "@/public/bikelogger.jpg";

const icons = { bike: FaBicycle, wiring: BsCpu, parts: BsBoxSeam, notes: BsJournalText };

// Plain <a> links throughout: /bike-logger and /bike-logger/hardware/ live outside the app router
// (a static page in public/ and the build notes proxied by Netlify, see netlify.toml).
export default function BikeLogger() {
  const { ref } = useSectionInView("Bike Logger", 0.4);

  return (
    <motion.section
      ref={ref}
      id="bike-logger"
      className="mb-28 w-full max-w-[56rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
    >
      <SectionHeading>Bike Logger</SectionHeading>

      <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-[#06080a] text-[#eceae4] shadow-xl dark:border-white/10">
        <div className="grid sm:grid-cols-[1.1fr_1fr]">
          <div className="relative z-10 flex flex-col p-7 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ffc46e]">
              Side project · hardware + software
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              A ride recorder I built for my own bike.
            </h3>
            <p className="mt-4 leading-relaxed text-white/70">{bikeLoggerData.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {bikeLoggerData.parts.map((part) => (
                <li
                  key={part}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white/80"
                >
                  {part}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/bike-logger"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-gray-950 outline-none transition hover:bg-[#ffc46e] focus:bg-[#ffc46e] active:scale-[0.98]"
              >
                Explore in 3D
                <BsArrowRight className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="/bike-logger/hardware/#bike"
                className="group flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white outline-none transition hover:bg-white/10 focus:bg-white/10 active:scale-[0.98]"
              >
                Build notes
                <BsArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <a href="/bike-logger" className="relative block min-h-[16rem] sm:min-h-full" aria-label="Open the 3D showcase">
            <Image
              src={bikelogger}
              alt="Render of the bike with the logger box on the rear rack"
              fill
              sizes="(min-width: 640px) 28rem, 100vw"
              className="object-cover transition duration-500 hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06080a] via-transparent to-transparent sm:bg-gradient-to-r" />
          </a>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-4">
        {bikeLoggerData.links.map((link, i) => {
          const Icon = icons[link.icon];
          return (
            <motion.a
              key={link.href}
              href={link.href}
              className="group flex flex-col rounded-2xl border border-black/5 bg-white/70 p-5 text-left shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-lg text-white transition group-hover:bg-[#ffc46e] group-hover:text-gray-950 dark:bg-white/15">
                <Icon />
              </span>
              <span className="mt-4 flex items-center gap-1.5 font-semibold">
                {link.title}
                <BsArrowRight className="text-sm opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100" />
              </span>
              <span className="mt-1 text-sm leading-snug text-gray-600 dark:text-white/60">{link.text}</span>
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
}
