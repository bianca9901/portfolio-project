"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

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
      <div>
        <p className="mb-3">
          Hey there! {`I'm`} a <span className="font-medium">25-year-old</span> web
          enthusiast from <span className="font-medium">Sweden</span>.
          I <span className="font-medium">love</span> crafting websites
          with <span className="font-medium">HTML</span>,{" "}
          <span className="font-medium">CSS</span>,{" "}
          <span className="font-medium">JavaScript</span>, and{" "}
          <span className="font-medium">Python</span>.
        </p>
        <p className="mb-3 italic">
          I particularly enjoy working with{" "}
          <span className="font-medium">React</span> and{" "}
          <span className="font-medium">Next.js</span>.
        </p>
        <p className="mb-3">
        {`I'm`} always eager to explore new technologies and stay updated with the
          latest trends! My goal is continuous personal and professional growth,
          finding <span className="font-medium">joy and pride</span> in my work
          along the way.
        </p>
      </div>
    </motion.section>
  );
}
