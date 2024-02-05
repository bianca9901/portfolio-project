"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
      scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">junior fullstack developer</span>{" "}
        with a diploma in{" "}
        <span className="font-medium">Fullstack Software Development</span>.
        With a solid foundation in <span className="font-medium">HTML</span>,{" "}
        <span className="font-medium">CSS</span>,{" "}
        <span className="font-medium">JavaScript</span>, and{" "}
        <span className="font-medium">Python</span>, I am ready to put my
        technical skills into practice.
      </p>

      <p className="mb-3">
        <span className="italic">
          {" "}
          I am seeking a position where I can not only{" "}
          <span className="font-medium">leverage my current skills </span> but
          also{" "}
          <span className="font-medium">
            expand them in line with the latest trends.
          </span>
        </span>{" "}
        Eager to take my first step into the tech industry, I aim to join a
        forward-thinking development team where I can{" "}
        <span className="font-medium">grow professionally.</span>
      </p>
    </motion.section>
  );
}
