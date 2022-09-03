import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-800">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-lg text-cyan-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-blue-200">
          Luca Gorvin.
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-blue-100">
          I'm a Front-End Developer.
        </h2>
        <p className="text-blue-100 py-4 max-w-[700px]">
          I'm an aspiring front-end developer specialisng in Web and Ux/Ui
          design. I can build responsive front-end applications and enjoy
          challenges.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-500 hover:border-cyan-500 duration-300">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-200">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
