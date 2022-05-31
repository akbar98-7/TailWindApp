import React from "react";

const footer = [
  {
    id: "e1",
    title: " Buy Now Pay Later",
    picture: "/Image/shoppingcart.svg",
  },
  {
    id: "e2",
    title: " Free Delivery",
    picture: "./Image/truck.svg",
  },
  {
    id: "e3",
    title: " Big Saving",
    picture: "./Image/dollar.svg",
  },
  {
    id: "e4",
    title: " Festival Offers",
    picture: "./Image/percentage.svg",
  },
];

export const Footer = () => {
  return (
    <div>
      <footer class="border-t border-gray-200 bg-blue">
        <div className="flex ml-14">
          {footer.map((data, index) => (
            <div className=" container flex flex-wrap px-4 py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
              <div className="bg-newblue h-10 w-10  rounded-full ">
                <img className=" -mt-0 p-2" src={data.picture} />
              </div>
              <span className="font-semibold text-xl text-white tracking-tight ml-2 mt-1">
                {data.title}
              </span>
            </div>
          ))}
        </div>
        <div class="relative flex py-5 -mt-9 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>


        <div className="grid grid-cols-11  gap-11 ml-20 ">

        <div class="sm:flex sm:items-center sm:justify-between -mt-10 ">
          <div class="flex mt-4 ml-16 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" class="bg-white h-9 w-9  rounded-full ml-13">
              <img className=" mt-1 p-2 ml-1" src="./Image/facebook.svg" />
            </a>
            <a href="#" class="border-2 h-9 w-9 -mt-0   rounded-full ml-11">
              <img className=" mt-1 p-2 ml-0" src="./Image/twitter.svg" />
            </a>
            <a href="#" class="border-2 h-9 w-9 -mt-0   rounded-full ml-11">
              <img className=" mt-1 p-2 -ml-0" src="./Image/youtube.svg" />
            </a>
            <a href="#" class="border-2 h-9 w-9 -mt-0   rounded-full ml-11">
              <img className=" mt-0 p-2 -ml-0" src="./Image/instagram.svg" />
            </a>
          </div>
        </div>

          <img
            className="ml-4 mt-5"
            src="/Image/northern1.png"
            width={200}
          ></img>

          

          <div class="border-dashed  border-l-4 ml-14 mt-10 border-gray-400 ..."></div>

          <div className="-ml-14 ">
            <h2 class="mb-6 text-sm flex justify-center font-semibold text-white uppercase">
              Quick Links
            </h2>
            <ul class="text-gray-300 ">
              <li class="mb-4">
                <a
                  href="#"
                  class=" hover:underline text-white flex justify-center"
                >
                  Home
                </a>
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline text-white flex justify-center"
                >
                  Products
                </a>
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline text-white flex justify-center"
                >
                  Package Deals
                </a>
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline text-white flex justify-center"
                >
                  Articles
                </a>
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline text-white flex justify-center"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div class="border-dashed  border-l-4 ml-14 mt-10 border-gray-400 ..."></div>
          <div className="-ml-14">
            <h2 class="mb-6 text-sm font-semibold text-white uppercase flex justify-center">
              Customer Service
            </h2>
            <ul class="text-gray-300">
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline text-white flex justify-center ml-10"
                >
                  Help Desk
                </a>
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline text-white flex justify-center ml-14"
                >
                  Returns and Refunds
                </a>
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline text-white flex justify-center ml-14"
                >
                  Contact us / Trading Hours
                </a>
              </li>
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline text-white flex justify-center ml-9"
                >
                  Articles
                </a>
              </li>
            </ul>
          </div>
          <div class="border-dashed  border-l-4 ml-14 mt-10 border-gray-400 ..."></div>
          <div className="-ml-14">
            <h2 class="mb-6 text-sm font-semibold text-white uppercase flex justify-center">
              Delivery Details
            </h2>
            <p className="text-base text-white  flex justify-center ml-6">
              Free delivery, to capital cities on orders over $100{" "}
            </p>

            <div class="flex mt-4 -ml-10 ">
              <a href="#" class="border-2 h-9 w-9 -mt-0   rounded-full ml-11">
                <img className=" mt-0 p-2 ml-0" src="./Image/phone.svg" />
              </a>
              <span className="font-semibold text-base text-white tracking-tight ml-1 mt-1">
                (08) 8262 6890
              </span>
            </div>
          </div>
          <div class="border-dashed  border-l-4 ml-14 mt-10 border-gray-400 ..."></div>
          <div className="-ml-14">
            <h2 class="mb-6 text-sm ml-6 font-semibold text-white uppercase flex justify-center">
              Subscribe to our Newslatter
            </h2>
            <input
              type="text"
              class="
              form-control
              block
              w-90
              px-3
              py-1.5
              ml-3
              text-base
              font-normal
              text-gray-700
              bg-sky-700 bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
              id="exampleFormControlInput1"
              placeholder="✉ Your email here"
            />

            <button
              type="button"
              class="inline-block mt-2 ml-14 px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:bg-green-500 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Subscribe
            </button>

            <br></br>

            <div className="grid grid-cols-2 gap-2 ">
              <div class="box-border h-33 w-17 mt-5 border-3  ">
                <img src="/Image/new.png" />
              </div>
              <div class="box-border h-35 w-24 mt-5 ml-13 border-3  ">
                <img src="/Image/new1.png" />
              </div>

              <div class="box-border h-33 w-18 mt-5 ml-13 border-3   ">
                <img src="/Image/new2.png" />
              </div>
            </div>
          </div>
        </div>

        <br></br>

        
      </footer>
      <div className="text-base flex justify-center">
        <p>
          © 2021
          <span className="text-base text-cyan-600"> H12V Northern. </span> All
          Rights Reserved.
        </p>
      </div>
    </div>
  );
};
