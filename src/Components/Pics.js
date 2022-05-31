import React from "react";

export const Pics = () => {
    return(

        <div>

        <div className="grid grid-cols-4  gap-4 ml-20 ">
            <img className="ml-4" src="./Image/pic1.jpg" width={500}  >
            </img>
            
            <img className="ml-10" src="./Image/pic1.jpg" width={700}></img>
            <img className="ml-12" src="./Image/pic1.jpg" width={700}></img>
        </div>

        <div className="grid grid-cols-4  gap-4 ml-20 ">
            <div className="border-solid  border-l-4 ml-4 mt-6 border-gray-400 ...">
            <p className="text-bold ml-3">Meet a Member:
            <br></br>
            <span className="ml-0">Home of 12 Volt Northern</span>
            </p>
            </div>

            <div className="border-solid  border-l-4 ml-10 mt-6 border-gray-400 ...">
            <p className="text-bold ml-3">Complete Off-Grid Landcruiser 79
            <br></br>
            <span className="ml-0">Victron Energy System</span>
            </p>
            </div>

            <div className="border-solid  border-l-4 ml-12  mt-6 border-gray-400 ...">
            <p className="text-bold ml-3">Full Brand Introduction

            <br></br>
            <span className="ml-0">MASTER MPEG 4</span>
            </p>
            </div>

        </div>

        </div>
        

    );
};