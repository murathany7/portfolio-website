"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { StaticImageData } from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  link?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const content = (
    <section className="bg-white/80 max-w-[42rem] border border-black/[0.06] rounded-2xl overflow-hidden sm:pr-8 relative sm:min-h-[20rem] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition sm:group-even:pl-8 dark:text-white dark:bg-white/[0.06] dark:border-white/10 dark:hover:bg-white/10">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col sm:group-even:ml-[40%]">
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag, index) => (
            <li
              className="bg-gray-100 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-gray-700 rounded-full dark:bg-white/10 dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        style={{ borderRadius: "0.75rem" }}
        className="absolute hidden sm:block top-8 right-4 w-[16rem] h-[16rem] object-contain transition group-hover:scale-[1.04] group-hover:-rotate-2 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:left-4"
      />
    </section>
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
}
