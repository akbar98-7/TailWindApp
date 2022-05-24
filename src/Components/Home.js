import React from "react";
import { Banner } from "./Banner";
import { Button } from "./Button";
import { Cards } from "./Cards";
import { CustomHeader } from "./CustomHeader";
import { Header } from "./Header";
import { Pics } from "./Pics";
import { ProductRange } from "./Product Range";
import { SlideBanner } from "./SlideBanner";
import Slider from "./Slider";
import { Topproducts } from "./Topproducts";

export const Home = () => {
    return (
        <div>
          <CustomHeader />
            <Header />
            <div className="container">
        <div className="flex justify-center">
            <Slider />

            </div>

         

        <SlideBanner />

        <br></br>
        <br></br>

        <div className="float-none flex justify-center ">
          <h2 className="font-bold text-2xl">
            Get Out Back and Stay There!
            <span className="font-bold text-blue-500">
              {" "}
              With Home of 12Volt
            </span>
          </h2>
        </div>

        <br></br>

        <div className="float-none flex justify-center">
          <h1 className="text-2xl text-red">
            {" "}
            ~~ + <a class="underline decoration-red-500"> </a> ~~{" "}
          </h1>
        </div>

        <br></br>

        <div className="flex justify-center ml-14">
        <Pics />

        </div>

        

        <br></br>

        
          
        

        <ProductRange />

        <div className="float-none flex justify-center">
          <h1 className="text-2xl text-red">
            {" "}
            ~~ + <a class="underline decoration-red-500"> </a> ~~{" "}
          </h1>
        </div>

        <br></br>

        <div className="flex justify-center">
        
        <Cards />


        </div>

        <br></br>

        <Button />

        

        <br></br>

        <div className="float-none flex justify-center ">
          <h2 className="font-bold text-4xl">
            Top Rated products
            </h2>
            </div>

            <div className="float-none flex justify-center">
          <h1 className="text-2xl text-red">
            {" "}
            ~~ + <a class="underline decoration-red-500"> </a> ~~{" "}
          </h1>
        </div>
        <br></br>

        <div className="flex justify-center">
            <Topproducts />
        </div>



        


        </div>
        </div>
    );
};