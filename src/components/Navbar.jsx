import { useState } from "react";
import Home from "./Home";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={
        colorChange
          ? " bg-white  w-full  fixed top-0 z-[2]"
          : " bg-transparent w-full fixed top-0 z-[2] "
      }
    >
      <div className=" ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="javascript:void(0)">
                <img
                  className="w-full h-10"
                  src="https://www.mentegoz.com/img/logo.png"
                  alt=""
                />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border duration-500"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 bg-white md:bg-transparent  md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center  p-10 md:p-0 space-y-8 md:flex md:space-x-6 md:space-y-0 font-bold text-center">
                <li className="text-blue-600">
                  <a href="javascript:void(0)">HOME</a>
                </li>
                <li
                  className={
                    colorChange
                      ? "text-black hover:text-blue-600"
                      : "  md:text-white text-black"
                  }
                >
                  <a href="javascript:void(0)">PROFILE</a>
                </li>
                <li
                  className={
                    colorChange
                      ? "text-black hover:text-blue-600"
                      : "  md:text-white text-black"
                  }
                >
                  <a href="javascript:void(0)">SERVICES</a>
                </li>
                <li
                  className={
                    colorChange
                      ? "text-black hover:text-blue-600"
                      : "  md:text-white text-black"
                  }
                >
                  <a href="javascript:void(0)">PORTFOLIO</a>
                </li>
                <li
                  className={
                    colorChange
                      ? "text-black hover:text-blue-600"
                      : " md:text-white text-black"
                  }
                >
                  <a href="javascript:void(0)">CLIENTS</a>
                </li>
                <li
                  className={
                    colorChange
                      ? "text-black hover:text-blue-600"
                      : "  md:text-white text-black"
                  }
                >
                  <a href="javascript:void(0)">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
