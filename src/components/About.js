import React from "react";
import { NervousCoder } from "./NervousCoder";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="intro-container">
            <h1
              id="intro"
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
            >
              Hi, I'm George.<span class="wave">👋</span>
              <br className="hidden lg:inline-block" />
              Welcome to my site.
            </h1>
          </div>
          <p id="sub-intro" className="mb-8 leading-relaxed">
            I'm a software engineer with over three years of professional
            experience. I have a strong passion for transforming ideas into
            functional and user-friendly solutions. Throughout my career, I've
            collaborated with cross-functional teams and gained valuable
            insights into the ever-evolving software industry. <br></br>
            Here is my experience so far.
          </p>
          <div>
            <a
              href="#experience"
              onClick={(e) => {
                let project = document.getElementById("experience");
                e.preventDefault();
                project &&
                  project.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              className="view-projects-button inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-500 rounded text-lg"
            >
              My Experience
            </a>
          </div>
        </div>
        <NervousCoder />
      </div>
    </section>
  );
}
