import React from "react";



const products = [
  {
    id: "e1",
    title: "ACE Switch Panels",
    picture: "./Image/pic1.jpg",
  },
  {
    id: "e2",
    title: "AGM Deep Cycle Batteries (5)",
    picture: "./Image/pic1.jpg",
  },
  {
    id: "e3",
    title: "Auxilary Battery Systems (28)",
    picture: "./Image/pic1.jpg",
  },
  {
    id: "e4",
    title: "Batteries (98)",
    picture: "./Image/pic1.jpg",
  },
  {
    id: "e5",
    title: "Battery Box (47)",
    picture: "./Image/pic1.jpg",
  },
];

export const Cards = (props) => {
  return (
    <div className="container max-w-7xl">
      <div className="grid grid-cols-5 gap-5 ">
      {products.map((data, index) => (
                   <div class="max-w-sm ml-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-gray-400 ">
                   <a href="#">
                     <img
                       className="rounded-t-lg"
                       src={data.picture}
                       alt=""
                       width={400}
                     />
                   </a>
                   <div class="p-5">
                     <a href="#">
                       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                         {data.title}
                       </h5>
                     </a>
                   </div>
                 </div>
          ))}


      </div>
    </div>
  );
};
