import React from "react";
import todo from "@/public/todo.png";
import django from "@/public/restaurant-django.png";
import zenzone from "@/public/zen-zone.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "ToDo",
    description:
      `Designed and implemented a dynamic To-Do website.
      Users can create to-do reminders, jot down
      notes, and manage their tasks.`,
    tags: ["React", "Django REST Framework", "PostgreSQL", "AJAX", "Node.js"],
    imageUrl: todo,
  },
  {
    title: "Restaurant Django",
    description:
     `Designed and developed a restaurant website with features such as event
     reservations and reviews, easily accessible for the restaurant staff to
     manage.`,
    tags: ["HTML", "CSS", "Django", "PostgreSQL"],
    imageUrl: django,
  },
  {
    title: "Zen Zone ",
    description:
      `Designed and developed a responsive yoga website with a focus on an
      intuitive user experience.`,
    tags: ["HTML", "CSS"],
    imageUrl: zenzone,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "SASS",
  "AJAX",
  "MongoDB",
  "Redux",
  "Django REST framework",
  "Heroku",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;