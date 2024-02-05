import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:biancawikberg99@yahoo.com">
          biancawikberg99@yahoo.com{" "}
        </a>
        or through this form
      </p>

      <form className="mt-10 flex flex-col">
        <input
          className="h-14 rounded-lg border border-black/10"
          type="email"
        />
        <textarea className="h-52 my-3 rounded-lg border-black/10 p-4" />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem]
           bg-gray-900 text-white rounded-full outline-none transition-all
           focus:scale-110
          hover:bg-gray-950
          hover:scale-110 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
          group-hover:translate-x-1 group-hover:-translate-y-1 "
          />{" "}
        </button>
      </form>
    </section>
  );
}
