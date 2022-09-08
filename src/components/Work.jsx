import React from "react";
import ratingComponent from "../assets/rating-component.jpeg";
import cardComponent from "../assets/card-component.jpeg";
import arcticTravel from "../assets/arctictravel.jpeg";
import aiDesign from "../assets/aidesign.jpeg";
import logInForm from "../assets/loginform.png";
import creditCardForm from "../assets/credit-card-form.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-slate-800">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Work
          </p>
          <p className="py-6">Check out my recent work.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${ratingComponent})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Rating Component
              </span>
              <div className="pt-8 text-center">
                <a href="https://guileless-daifuku-2f6723.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/lgorvin/rating-component">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${cardComponent})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Card Component
              </span>
              <div className="pt-8 text-center">
                <a href="https://keen-starburst-d1403e.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/lgorvin/card-component">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${arcticTravel})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Arctic Travel Web-Site
              </span>
              <div className="pt-8 text-center">
                <a href="https://melodious-faun-933355.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/lgorvin/arctic-travels">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${aiDesign})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Generative Art
              </span>
              <div className="pt-8 text-center">
                <a href="https://cdpn.io/pen/debug/RwMqLow?authentication_hash=yokZEBXNGLWA">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://codepen.io/lgorvin/pen/RwMqLow">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${creditCardForm})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Card Designs
              </span>
              <div className="pt-8 text-center">
                <a href="https://cheerful-gingersnap-f769d7.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/lgorvin/credit-card-form">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${logInForm})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Log In Form
              </span>
              <div className="pt-8 text-center">
                <a href="https://cdpn.io/pen/debug/poLaNmW?authentication_hash=XBAGRNeaJwLr">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://codepen.io/lgorvin/pen/poLaNmW">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
