import React from "react";

export const Header = () => {
  return (
    <nav className="flex items-center  flex-wrap bg-white p-6">
      <div className="flex items-center  flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight ml-12  ">
          {" "}
          <img className="ml-10" src="./Image/northern.jpg" width={100}></img>
        </span>
      </div>

      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto  ">
        <div className="text-sm lg:flex-grow flex justify-center">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  text-black text-base text-center "
          >
            Home
          </a>
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            class="block mt-4 lg:inline-block lg:mt-0 ml-6 text-black text-base  border-b border-black hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto  dark:hover:text-black dark:focus:text-black dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            Products{" "}
            <svg
              class="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 ml-6 text-black text-base "
          >
            Package Deals
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 ml-6 text-black text-base "
          >
            Articles
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 ml-6 text-black text-base "
          >
            Contact Us
          </a>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-20  "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
    </nav>
  );
};
