import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dostumImg from "@/public/chatbot.jpg";
import cybank from "@/public/banking.png";
import scraper from "@/public/scraper.png";
import dogefun from "@/public/dogefun.jpg";
import assembly from "@/public/assembly.png";
import cryptoland from "@/public/cryptoland.jpeg";
import stocks from "@/public/stocks.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer Intern at HomePainter LLC",
    location: "Des Moines, IA",
    description:
      "I developed production level code working on products such as NodeJS, MongoDB queries and Angular; Gained experience with both front-end and back-end development fixing bugs and implementing new features",
    icon: React.createElement(CgWorkAlt),
    date: "March 2021 - August 2021",
  },
  {
    title: "Software Engineer Intern at System1",
    location: "Los Angeles, CA",
    description:
      "Developed production level code, working on products in .NET Core framework such as React JS, NodeJS, MongoDB queries",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022- August 2022",
  },
  {
    title: "AI Engineer intern at Huawei Türkiye",
    location: "Istanbul, TR",
    description:
      "Developed a recommendation algorithm using the PyTorch DeepFM model, enhancing customer engagement through personalized content and product suggestions",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023- August 2023",
  },
  {
    title:
      "ICT Software Engineer Intern at United Nations Development Programme",
    location: "Istanbul, TR",
    description:
      "Developed an internal tool designed to enhance organizational efficiency, utilizing React and Material-UI for frontend development, coupled with a Node.js backend and SQL database, streamlining workflow processes for employees",
    icon: React.createElement(CgWorkAlt),
    date: "October 2023 - April 2024",
  },
  {
    title: "Software Engineer Intern at United Nations Development Programme",
    location: "Istanbul, TR",
    description:
      "Developed a comprehensive Early Warning System (EWS) project, focused on visualizing environmental risks including drought, floods, and food security, by implementing a full-stack solution using React and Leaflet for the frontend and Python Django for the backend.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2024 - June 2024",
  },
  {
    title: "Software Engineer Lead at Yuppo(Insider)",
    location: "Istanbul, TR",
    description:
      "Working on the development of a deployed virtual assistant for parents, focusing on cloud and backend.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Dostuma Sor",
    description:
      "A mobile app that lets users befriend a virtual assistant named Dostuma Sor.",
    tags: ["Flutter", "Firebase", "Node.js", "AWS"],
    imageUrl: dostumImg,
  },
  {
    title: "Doge Fun Bet",
    description:
      "A web app that lets users bet on Dogecoin whether it will reach a certain price or not.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: dogefun,
  },
  {
    title: "CyBank",
    description: "A mobile app that helps students have banking services.",
    tags: ["Java", "Spring Boot", "MySQL"],
    imageUrl: cybank,
  },
  {
    title: "CyStocks",
    description:
      "A stock market app that lets users analyze stocks and view news.",
    tags: ["React", "Redux", "MongoDB", "Node.js", "Express"],
    imageUrl: stocks,
  },
  {
    title: "CryptoLand",
    description: "Crypto DAPP where users can buy and sell land using crypto.",
    tags: ["Solidity", "React", "AWS", "Bootstrap"],
    imageUrl: cryptoland,
  },
  {
    title: "Assembly Code",
    description:
      "School project that lets users write assembly code and run it.",
    tags: ["Assembly", "ARM"],
    imageUrl: assembly,
  },
  {
    title: "Data Scraper for News",
    description:
      "A python tool that scrapes news from a website and saves it to a database.",
    tags: ["Python", "BeautifulSoup", "SQLite"],
    imageUrl: scraper,
  },
] as const;

export const skillsData = [
  "Python",
  "AWS",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "Spring Boot",
  "MySQL",
  "Solidity",
  "MongoDB",
  "Redux",
  "PostgreSQL",
  "Django",
  "FastAPI",
  "Docker",
] as const;
