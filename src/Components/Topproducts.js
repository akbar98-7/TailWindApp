import React from "react";
import { Button2 } from "./Button2";
import { Rating } from "./Rating";

export const Topproducts = () => {
    return (
        <div className="container max-w-7xl">
        <div className="grid grid-cols-4 gap-4 ">
    <div class="max-w-sm ml-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-gray-400 ">
    <a href="#">
        <img className="rounded-t-lg" src="./Image/pic1.jpg" alt="" width={450} />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 className=" flex justify-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Ace NXT-G Triple Flush Plate Volt and 2 X Cig</h5>
        </a>

        <div className="flex justify-center pt-6">
            <Rating />
        </div>

        <p className=" flex justify-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">$39.00</p>

        <div className="flex justify-center ">
            <Button2 />
        </div>
        
    </div>


</div>

<div class="max-w-sm  ml-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-gray-400">
    <a href="#">
        <img className="rounded-t-lg" src="./Image/pic1.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="flex justify-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Ace NXT-G Quad Panel- Volt/ USB / 2 X Merit</h5>
        </a>

        <div className="flex justify-center pt-6">
            <Rating />
        </div>

        <p className=" flex justify-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">$39.00</p>

        <div className="flex justify-center ">
            <Button2 />
        </div>
        
    </div>


</div>

<div class="max-w-sm ml-8  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-gray-400">
    <a href="#">
        <img className="rounded-t-lg" src="./Image/pic1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 className=" flex justify-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Ctek Mxs 5.0 Battery Charger</h5>
        </a>

        <div className="flex justify-center pt-6">
            <Rating />
        </div>

        <p className=" flex justify-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">$39.00</p>

        <div className="flex justify-center ">
            <Button2 />
        </div>
        
    </div>


</div>

<div class="max-w-sm ml-8  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-gray-400">
    <a href="#">
        <img className="rounded-t-lg" src="./Image/pic1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 className=" flex justify-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">Lcsta23</h5>
        </a>

        <div className="flex justify-center pt-11">
            <Rating />
        </div>

        <p className=" flex justify-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">$39.00</p>

        <div className="flex justify-center ">
            <Button2 />
        </div>
        
    </div>


</div>




</div>





</div>
    );
};