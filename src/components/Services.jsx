import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { DiCode } from "react-icons/di";
import { ImMobile } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsReception4 } from "react-icons/bs";

const Services = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-black/80">OUR SERVICES</h1>
        <h4 className="text-blue-900 font-semibold pt-2">
          We give you the best
        </h4>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 pr-10 md:pr-0  justify-center items-center ml-20 mt-10">
        <div className="flex flex-col justify-center group font-semibold text-white hover:text-black items-center duration-700 group hover:bg-slate-50 hover:scale-110 md:rounded-tl-[80px] bg-blue-900 md:w-[200px] md:h-[140px] shadow-md shadow-gray-400/50">
          <RiComputerLine
            size={70}
            className="text-white group-hover:text-blue-900 group-hover:-rotate-12 duration-700 "
          />
          <h1>WEB DESIGNING</h1>
        </div>
        <div className="flex flex-col justify-center group items-center hover:scale-110 hover:bg-blue-900 hover:text-white font-semibold duration-700  bg-slate-50 md:w-[200px] md:h-[140px] rounded-xl shadow-md shadow-gray-400/50">
          <DiCode
            size={80}
            className="text-blue-900 group-hover:-rotate-45 group-hover:text-white duration-700"
          />
          <h1>SOFTWARE DEV</h1>
        </div>
        <div className="flex flex-col justify-center items-center group hover:scale-110 hover:bg-blue-900 hover:text-white font-semibold duration-700 bg-slate-50 md:w-[200px] md:h-[140px] rounded-xl shadow-md shadow-gray-400/50">
          <ImMobile
            size={70}
            className="text-blue-900 group-hover:-rotate-45 group-hover:text-white duration-700"
          />
          <h1 className="mt-2">APP DEVELOPMENT</h1>
        </div>
        <div className="flex flex-col justify-center items-center group hover:scale-110 hover:bg-blue-900 hover:text-white font-semibold duration-700 bg-slate-50 md:w-[200px] md:h-[140px] rounded-xl shadow-md shadow-gray-400/50">
          <BiSearchAlt2
            size={70}
            className="text-blue-900 group-hover:rotate-90 group-hover:text-white duration-700"
          />
          <h1>BRANDING</h1>
        </div>
        <div className="flex flex-col justify-center p-5 items-center group hover:scale-110 hover:bg-blue-900 hover:text-white font-semibold duration-700 bg-slate-50 md:w-[200px] md:h-[140px] md:rounded-tr-[80px] shadow-md shadow-gray-400/50">
          <BsReception4
            size={70}
            className="text-blue-900 group-hover:-rotate-90 group-hover:text-white duration-700"
          />
          <h1>DIGITAL MARKETING</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
