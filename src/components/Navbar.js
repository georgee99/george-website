import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="font-medium text-white md:mb-0">
          <a
            href="#about"
            onClick={(e) => {
              let about = document.getElementById("about");
              e.preventDefault();
              about &&
                about.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="ml-3 text-xl"
          >
            George El-Zakhem
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-2 md:pl-4 md:border-l md:border-gray-600">
          <a
            href="#projects"
            onClick={(e) => {
              let projects = document.getElementById("projects");
              e.preventDefault();
              projects &&
                projects.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="mr-5 hover:text-white"
          >
            Past Work
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              let skills = document.getElementById("skills");
              e.preventDefault();
              skills &&
                skills.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="mr-5 hover:text-white"
          >
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          onClick={(e) => {
            let contact = document.getElementById("contact");
            e.preventDefault();
            contact && contact.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
