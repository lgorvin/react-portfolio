import React from "react";
import ReactLogo from "../assets/react.png";
import HTMLLogo from "../assets/html.png";
import CSSLogo from "../assets/css.png";
import GitHubLogo from "../assets/github.png";
import TailwindLogo from "../assets/tailwind.png";
import JSLogo from "../assets/javascript.png";


const Skills = () => {

  return (
    <div
      id="my-element"
      name="experience"
      className="w-full h-screen bg-slate-800 text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 ">
            Experience
          </p>
          <p className="py-4">
            These are the main technologies that I work with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTMLLogo} alt="HTML Logo" />
            <p className="my-4">HTML</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSSLogo} alt="HTML Logo" />
            <p className="my-4">CSS</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JSLogo} alt="HTML Logo" />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactLogo} alt="HTML Logo" />
            <p className="my-4">React</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TailwindLogo} alt="HTML Logo" />
            <p className="my-4">TailWind CSS</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHubLogo} alt="HTML Logo" />
            <p className="my-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
