import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-slate-800 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>It's a pleasure to meet you. Please have a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about Web-Design and Front-End Development. I have
              been learning to code and hope to transition into the world of
              development. I am currently working as an IT Technician, which
              enables my love for technology. In the past I have freelanced as a
              graphic designer, proving the design skills I hold.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
