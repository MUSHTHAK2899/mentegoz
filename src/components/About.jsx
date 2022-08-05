import React from "react";
import { about } from "../Data";
import { aboutList } from "../Data";

const About = () => {
  const { title, title1, subtitle, image } = about;

  return (
    <section className="  w-full lg:mt-[730px] mt-[400px] mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col p-5 lg:flex-row lg:gap-x-[100px]">
          {/* image */}
          <div className="flex  mt-28">
            <img className="h-[300px]" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1  flex flex-col justify-end text-left p-3">
            <h2 className="title text-gray-600">{title1}</h2>
            <h2 className="title text-7xl text-blue-800/80 tracking-wide">
              {title}
            </h2>
            <p className="subtitle font-serif text-[#908897] text-md leading-snug max-w-[650px] overflow-hidden">
              {subtitle}
            </p>
            <div className="flex justify-end md:mr-28 ">
              <button className=" bg-blue-900 px-5 py-2 rounded-full text-white shadow-md shadow-blue-700">
                Read More
              </button>
            </div>
          </div>
        </div>
        {/*list*/}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-7 gap-5 md:gap-7 justify-center md:ml-20 p-7  mx-auto">
          {aboutList.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col justify-center items-center hover:-translate-y-6 duration-300 bg-slate-50 md:w-[200px] md:h-[170px] rounded-xl shadow-md shadow-gray-400/50">
                  <img className="" src={item.image} alt="" />
                  <h1 className="text-gray-500 font-semibold">{item.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
