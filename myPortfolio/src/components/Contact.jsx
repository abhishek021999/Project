import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [alert, setAlert] = useState({ visible: false, message: "" });

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setAlert({ visible: true, message: `Copied: ${text}` });
    setTimeout(() => {
      setAlert({ visible: false, message: "" });
    }, 2000); 
  };
// return 
  return (
    <div
      name="contact"
      className="relative w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-[80px]"
    >
      {alert.visible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
          {alert.message}
        </div>
      )}
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div id="main" className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col w-full lg:w-3/5">
            <form
              action="https://getform.io/f/lbkoojpb"
              method="POST"
              className="flex flex-col w-full"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let's talk
              </button>
            </form>
          </div>

          <div className="lg:w-2/5 w-full p-4 shadow-lg">
            <div
              className="flex items-center my-4 cursor-pointer"
              onClick={() => copyToClipboard("706879298")}
              title="Click to copy"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-cyan-500" />
              <span>706879298</span>
            </div>
            <div
              className="flex items-center my-4 cursor-pointer"
              onClick={() => copyToClipboard("aksingh171999@gmail.com")}
              title="Click to copy"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-cyan-500" />
              <span>aksingh171999@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
