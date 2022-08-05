import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1640px] h-screen absolute top-0">
        <div className="h-[500px] lg:h-[700px] relative ">
          <div className="">
            <button className="fixed right-0 top-[300px]  -rotate-90 text-white text-xl font-bold z-[1] bg-blue-900 px-4 py-3 rounded-t-[28px]">
              ENQUIRY
            </button>
            <button className="fixed right-9 top-[460px] px-3 py-3 rounded-full  bg-blue-900 text-white text-xl font-bold z-[2]">
              <BsMessenger size={30} />
            </button>
            <button className="fixed right-9 top-[535px] px-3 py-3 rounded-full  text-blue-900 bg-slate-100 shadow-md animate-bo text-xl font-bold z-[2]">
              <IoIosArrowUp size={30} />
            </button>
          </div>
          <div className="absolute w-full h-full text-gray-200 lg:h-[700px] bg-blue-900/70 flex flex-col justify-center shadow-sm shadow-gray-800 "></div>
          <img
            className="w-full h-[500px] lg:h-[700px] object-cover lg:animate-pulse"
            src="https://www.mentegoz.com/img/banner/bg9.jpg"
            alt=""
          />
          <img
            className="absolute top-0 lg:bg-indigo-900/80   hidden lg:flex"
            src="https://www.mentegoz.com/img/banner/header-bg1.png"
            alt=""
          />

          <div className="absolute top-10 flex flex-col gap-y-14 lg:gap-y-18 ml-[40px] mt-24 lg:mt-32 text-center lg:text-black text-white tracking-widest">
            <h1 className=" lg:text-gray-500">MAKE YOUR IDEAS HAPPEN</h1>
            <h1 className="text-3xl md:w-[500px] font-bold lg:text-blue-900">
              TAKE YOUR BUSINESS NEXT LEVEL
            </h1>
            <h4 className="text-xl mt-5 lg:text-gray-500">
              WEBSITE DEVELOPMENT
              <h1 className="lg:text-gray-400">
                Build a website that builds your business
              </h1>
            </h4>
            <div className="absolute">
              <FaAngleDown
                size={70}
                className=" ml-[600px] mt-[380px] text-blue-900 animate-bounce hidden lg:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
