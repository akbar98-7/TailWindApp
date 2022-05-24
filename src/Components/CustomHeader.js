import React from "react";

export const CustomHeader = () => {
  return (
    <nav className="flex items-center  flex-wrap bg-blue-600 p-6 h-8 ">
      <div className="flex items-center  flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight ml-12  ">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 -mt-2 ml-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
</svg>

        </span>
        <span className="font-semibold text-base tracking-tight ml-2 -mt-3">0422 698 393</span>
      </div>

      <div className=" text-sm lg:flex-grow flex justify-center ">
          <h2 className="font-bold text-base text-stone-300 -mt-4  ">
          "Purchases under $100 will incur a $12 shipping fee 
            <span className="font-bold text-sm text-white">
              {" "}
              - Thank You"
            </span>
          </h2>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 -mt-5 bg-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<span className="font-normal text-base tracking-tight ml-2 -mt-5 text-white">My Admin</span>


      
      
    </nav>
  );
};