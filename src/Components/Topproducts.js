import React from "react";
import { Button2 } from "./Button2";
import { Rating } from "./Rating";


const topproducts = [
  {
    id: "e1",
    title: " Ace NXT-G Triple Flush Plate Volt and 2 X Cig",
    picture: "./Image/pic1.jpg",
    rating:<Rating />,
    amount:"$55.00",
    button:<Button2 />

  },
  {
    id: "e2",
    title: "Ace NXT-G Quad Panel- Volt/ USB / 2 X Merit",
    picture: "./Image/pic1.jpg",
    rating:<Rating />,
    amount:"$169.00",
    button:<Button2 />

  },
  {
    id: "e3",
    title: "Ctek Mxs 5.0 Battery Charger",
    picture: "./Image/pic1.jpg",
    rating:<Rating />,
    amount:"$39.00",
    button:<Button2 />

  },
  {
    id: "e4",
    title: "Lcsta23",
    picture: "./Image/pic1.jpg",
    rating:<Rating />,
    amount:"$49.00",
    button:<Button2 />

  },
];

export const Topproducts = () => {
  return (
    <div className="container max-w-7xl">
      <div className="grid grid-cols-4 gap-4 ">
      {topproducts.map((data, index) => (
        <div class="max-w-sm ml-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-gray-400 ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={data.picture}
              alt=""
              width={450}
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 className=" flex justify-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
                {data.title}
              </h5>
            </a>

            <div className="flex justify-center pt-6">
              {data.rating}
            </div>

            <p className=" flex justify-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
              {data.amount}
            </p>

            <div className="flex justify-center  ">
              {data.button}
            </div>
          </div>
        </div>

))}

 
      </div>
    </div>
  );
};
