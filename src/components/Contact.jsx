import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w=full h-screen bg-slate-800 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/be4f5263-468a-4be9-ab9c-1dc19c7a9f5c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Complete the form below or drop me an email at lgorvin78@gmail.com
          </p>
        </div>
        <input
          className="bg-[#fcfcfc] p-2 roundBorder"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#fcfcfc] roundBorder"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#fcfcfc] p-2 roundBorder"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
