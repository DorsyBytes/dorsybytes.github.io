import capstoneImg from '../src/assets/projects/capstone-project.jpg';
import sanRafaelImg from '../src/assets/projects/san-rafael-river-adventure.jpg';
import makatiImg from '../src/assets/projects/makati-sports-club.jpg';
import rpccImg from '../src/assets/projects/rpcc.jpg';
import abvImg from '../src/assets/projects/abvaccounting.jpg';

export const PROFILE = {
  name: "Joshua Adora",
  title: "Frontend Developer | React Enthusiast | WordPress",
  tagline:
    "I build clean, responsive web apps. I love exploring new tech, playing video games, and sometimes hooping or spiking on the court.",
  email: "adorajoshua112@gmail.com",
  github: "DorsyBytes",
  linkedin: "https://www.linkedin.com/in/joshua-adora-323568323"
};

export const SKILLS = [
  "React",
  "JavaScript",
  "HTML5 & CSS3",
  "SCSS",
  "Vite",
  "REST APIs",
  "WordPress",
  "Git & GitHub",
  "Responsive UI"
];

// Optional: showcase a few featured projects if the API fetch fails or while loading.
export const FALLBACK_PROJECTS = [
  {
    id: "fallback-1",
    name: "Featured Project 1",
    description: "A sample card shown if GitHub API rate-limits the request.",
    language: "JavaScript",
    stargazers_count: 0,
    html_url: "https://github.com/DorsyBytes",
    updated_at: "2025-01-01T00:00:00Z"
  }
];

export const PROJECTS = [
  {
    id: 1,
    name: "Our Capstone Project",
    description: "Point of Sale with Inventory Management System for a Hardware store. Awarded as best in Capstone Project.",
    tech: ["JavaScript"],
    image: capstoneImg,
    updated: "2022-08"
  },
  {
    id: 2,
    name: "San Rafael River Adventure",
    description: "A responsive website with detailed information about San Rafael River Adventure with SEO Optimization.",
    tech: ["WordPress", "CSS"],
    url: "https://sanrafaelriveradventure.com",
    image: sanRafaelImg,
    updated: "2023-01"
  },
  {
    id: 3,
    name: "Online Court Reservation",
    description: "A responsive website for Makati Sports Club with online court reservation system.",
    tech: ["React.js", "Node.js", "SCSS"],
    url: "https://makatisportsclub.com",
    image: makatiImg,
    updated: "2025-08"
  },
  {
    id: 4,
    name: "Company Landing Page - RPCC",
    description: "Landing page for a client with modern design and SEO optimization.",
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    url: "https://rpcc.com.ph",
    image: rpccImg,
    updated: "2025-03-20"
  },
  {
    id: 5,
    name: "Company Landing Page - ABVA Accounting",
    description: "Landing page for a client with modern design and SEO optimization.",
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    url: "https://abvacounting.com",
    image: abvImg,
    updated: "2024-10-20"
  }
];


