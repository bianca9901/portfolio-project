"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./Submit-Btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]
    text-center"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:biancawikberg99@yahoo.com">
          biancawikberg99@yahoo.com{" "}
        </a>
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
         const { data, error } = await sendEmail(formData);
         if (error) {
          alert(error)
          return
         }
         alert('email sent succesfully')
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border-black/10 p-4"
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
        />
        <SubmitBtn/>
      </form>
    </motion.section>
  );
}
