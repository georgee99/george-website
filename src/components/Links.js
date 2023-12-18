import React from "react";
import linkedInLogo from "../images/LinkedIn.png";
import twitterLogo from "../images/Twitter-SVG.svg";
import githubLogo from "../images/GitHub-Mark-Light-120px-plus.png";
import CV from "../data/CV.pdf";
import { EmojiHappyIcon } from "@heroicons/react/solid";

export default function Links() {
  return (
    // <section className="hidden sm:flex">
    <section>
      <div id="skills-thing" className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1
            id="social-text"
            className="sm:text-4xl text-3xl font-medium title-font text-white mb-4"
          >
            My socials and CV &nbsp;
            <EmojiHappyIcon className="mx-auto inline-block w-12 " />
          </h1>
        </div>
        <div className="flex justify-center">
          {/* GitHub */}
          <a
            href="https://github.com/georgee99"
            target="_blank"
            rel="noreferrer"
          >
            <img
              id="github"
              className="object-contain h-24 w-48 social-link"
              src={githubLogo}
              alt="GitHub"
            ></img>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/george-el-zakhem/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="object-contain h-24 w-48 social-link"
              src={linkedInLogo}
              alt="LinkedIn"
            ></img>
          </a>

          {/* Download button */}
          <a href={CV} download title="CV">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="object-contain h-24 w-32 social-link"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/GeorgeEL99"
            target="_blank"
            rel="noreferrer"
          >
            <img
              id="twitter"
              className="object-contain h-24 w-48 social-link"
              src={twitterLogo}
              alt="Twitter"
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
}
