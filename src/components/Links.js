import linkedInLogo from "../images/LinkedIn.png";
import twitterLogo from "../images/Twitter-SVG.svg";
import githubLogo from "../images/github-logo.png";
import CV from "../data/CV.pdf";

export default function Links() {
  return (
    <footer id="socials-footer" className="bg-gray-800 text-white">
      <div className="container mx-auto flex p-4 items-center justify-between">
        <div className="font-medium text-gray-400">
          <a
            href="https://georgeelz.blog/"
            target="_blank"
            rel="noreferrer"
            className="ml-3 text-base hover:text-white"
          >
            Blog
          </a>
        </div>
        <div className="flex items-center space-x-8">
          {/* GitHub */}
          <a
            href="https://github.com/georgee99"
            target="_blank"
            rel="noreferrer"
          >
            <img
              id="github"
              className="object-contain h-10 w-10 social-link"
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
              className="object-contain h-10 w-10 social-link"
              src={linkedInLogo}
              alt="LinkedIn"
            ></img>
          </a>

          {/* Download button */}
          <a href={CV} download title="CV">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="object-contain h-10 w-10 social-link"
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
          <a href="https://twitter.com/GeorgeEL99" target="_blank" rel="noreferrer">
            <img
              id="twitter"
              className="object-contain h-10 w-10 social-link"
              src={twitterLogo}
              alt="Twitter"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
}
