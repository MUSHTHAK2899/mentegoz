import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const Why = () => {
  return (
    <>
      <div className="container mx-auto pl-7 md:pl-20 mt-5">
        <div className="text-5xl border-l-4 border-[rgb(43,43,137)] p-2">
          <h1 className="tracking-wider ml-7 text-gray-800">
            Why Choose
            <h1 className="tracking-wider mt-2 text-[rgb(43,43,137)]">
              Mentegoz ?
            </h1>
          </h1>
        </div>
        <div className="">
          <img
            className="float-right w-[700px] h-[400px] "
            src="https://www.mentegoz.com/img/choose-img-2.svg"
            alt=""
          />
          <p className="tracking-wide text-lg pt-10 text-blue-900/70 font-medium ">
            Why Choose Mentegoz ? Mentegoz technologies attempt to create
            digital products that satisfy both the needs of the user and your
            company goals. Clients can choose from a variety of Platforms and
            Technologies. We understand that each company has unique
            requirements that must be met in a variety of ways. As a result of
            our long-term connections with clients, we offer high-quality
            solutions that are adaptable. We are the best IT Company that
            provides web designing, software solutions, e-commerce, branding and
            digital marketing in Kozhikode, Kerala. we take deadlines and
            milestones seriously and deliver impactful solutions on time and
            within budget. At Mentegoz technologies, we're trustees of your
            budget. We establish a scope of the project that meets your
            investment. According to our ideology, our services should be worth
            more than what is charged. We provide one of the best services in
            web designing, E-commerce, and digital marketing company in Calicut,
            Kerala. Working with us is the most pleasant, creative, and easy
            service you've ever experienced. Our well efficient, and kind
            workforce is here to assist you, and we believe that it is our
            responsibility to learn about your company.
          </p>
        </div>
        <div className="pt-5 mb-5 ">
          <div className="flex items-center gap-x-4 p-2">
            <FiCheckCircle size={25} className="text-blue-900 " />
            <h1 className="text-blue-900/70 tracking-wide text-lg font-medium hover:translate-x-5 duration-300 ">
              innovative ideas planers
            </h1>
          </div>
          <div className="flex items-center gap-x-4 p-2">
            <FiCheckCircle size={25} className="text-blue-900 " />
            <h1 className="text-blue-900/70 tracking-wide text-lg font-medium hover:translate-x-5 duration-300 ">
              Modern and Innovative Designs
            </h1>
          </div>
          <div className="flex items-center gap-x-4 p-2">
            <FiCheckCircle size={25} className="text-blue-900 " />
            <h1 className="text-blue-900/70 tracking-wide text-lg font-medium hover:translate-x-5 duration-300 ">
              Best content plans
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
