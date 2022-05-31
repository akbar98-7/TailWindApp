import React from "react";

const banner = [
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

export const SlideBanner = () => {
    return(
        <nav className="border-t border-gray-200 bg-blue">
 <div className="flex ml-14 -mt-11">
          {banner.map((data, index) => (
            <div className=" container flex flex-wrap px-4 py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
              <div className="bg-newblue h-10 w-10  rounded-full mt-6 ">
                <img className=" -mt-0 p-2" src={data.picture} />
              </div>
              <span className="font-semibold text-xl text-white tracking-tight ml-2 mt-7">
                {data.title}
              </span>
            </div>
          ))}
          </div>
      </nav>
    );
};