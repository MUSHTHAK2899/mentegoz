import React from "react";

const Join = () => {
  return (
    <div className="">
      <div className="flex justify-center overflow-hidden">
        <img
          className="w-[600px] h-[500px] "
          src="https://www.mentegoz.com/img/tools.svg "
          alt=""
        />
      </div>
      <div className="text-center p-5">
        <h1 className="text-4xl text-blue-900 tracking-wider">
          Would you like to join with us?
        </h1>
        <p className="text-gray-500 mt-4">
          We're always on the lookout for talents who think differently and work{" "}
        </p>
        <h4 className="text-gray-500 ">
          exceptionally. Head to our Careers page to know more.
        </h4>
        <button className="mt-5 px-7 py-2 bg-blue-900 text-white font-bold rounded-full shadow-md shadow-blue-900 hover:scale-110 duration-300">
          JOIN WITH US
        </button>
      </div>
    </div>
  );
};

export default Join;
