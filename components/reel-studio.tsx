"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsArrowUpRight, BsCheck2, BsCopy, BsGithub } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { SiHomebrew, SiNpm } from "react-icons/si";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { reelStudioData } from "@/lib/data";

const icons = { github: BsGithub, npm: SiNpm, python: FaPython, brew: SiHomebrew };

// The reel is a plain <video> from public/reel-studio/: muted so it can autoplay, with the poster as its first frame.
export default function ReelStudio() {
  const { ref } = useSectionInView("Reel Studio", 0.4);
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText(reelStudioData.install).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <motion.section
      ref={ref}
      id="reel-studio"
      className="mb-28 w-full max-w-[56rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Reel Studio</SectionHeading>

      <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-[#0b0c0f] text-[#eceae4] shadow-xl dark:border-white/10">
        <div className="grid sm:grid-cols-[1.35fr_1fr]">
          <div className="relative z-10 flex flex-col p-7 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#e8a33d]">
              Open source · Claude Code plugin
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              Agency-quality reels, made by Claude Code.
            </h3>
            <p className="mt-4 leading-relaxed text-white/70">{reelStudioData.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {reelStudioData.engines.map((engine) => (
                <li
                  key={engine}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white/80"
                >
                  {engine}
                </li>
              ))}
            </ul>

            <button
              onClick={copyInstall}
              className="mt-7 flex w-fit items-center gap-3 rounded-xl border border-white/15 bg-black/40 px-4 py-3 font-mono text-sm text-white/90 outline-none transition hover:border-[#e8a33d]/60 focus:border-[#e8a33d]/60"
              aria-label="Copy the install command"
            >
              <span className="text-[#e8a33d]">$</span>
              {reelStudioData.install}
              {copied ? <BsCheck2 className="text-[#3ecf7a]" /> : <BsCopy className="opacity-60" />}
            </button>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/murathany7/reel-studio"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-gray-950 outline-none transition hover:bg-[#e8a33d] focus:bg-[#e8a33d] active:scale-[0.98]"
              >
                View on GitHub
                <BsArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="/reels"
                className="group flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white outline-none transition hover:bg-white/10 focus:bg-white/10 active:scale-[0.98]"
              >
                Reel gallery
                <BsArrowRight className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com/murathany7/reel-studio/releases/latest"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white outline-none transition hover:bg-white/10 focus:bg-white/10 active:scale-[0.98]"
              >
                Full-quality reels
                <BsArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center p-7 pt-0 sm:p-10 sm:pl-0">
            <figure className="w-full max-w-[15rem]">
              <video
                className="aspect-[9/16] w-full rounded-[1.75rem] border-4 border-white/10 bg-black object-cover shadow-2xl"
                src="/reel-studio/bike-logger-reel.mp4"
                poster="/reel-studio/bike-logger-reel.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="The Bike Logger kit reel, made with Reel Studio"
              />
              <figcaption className="mt-3 text-center text-xs text-white/50">
                Bike Logger kit reel · 28 s, made by an agent from the product&apos;s live site
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-4">
        {reelStudioData.links.map((link, i) => {
          const Icon = icons[link.icon];
          return (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-black/5 bg-white/70 p-5 text-left shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-lg text-white transition group-hover:bg-[#e8a33d] group-hover:text-gray-950 dark:bg-white/15">
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
