import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Links from "./components/Links";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });

  return (
    <div>
      {isLoading === true ? (
        <Loading loading={isLoading} />
      ) : (
        <main className="text-gray-400 bg-gray-900 body-font">
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Links />
        </main>
      )}
    </div>
  );
}
