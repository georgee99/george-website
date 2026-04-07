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
            I'm a software engineer with over four years of experience building scalable web applications and APIs. 
            I enjoy turning ideas into practical, user-focused solutions, with a strong emphasis on performance, clarity, 
            and maintainability. I've worked across the full stack and collaborated closely with cross-functional teams 
            to deliver reliable software in fast-paced environments.<br></br>
          </p>
        </div>
        <NervousCoder />
      </div>
    </section>
  );
}
