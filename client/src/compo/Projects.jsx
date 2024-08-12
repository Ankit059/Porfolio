import React from "react";
import { Card } from "./Card";

export const Projects = () => {
  return (
    <>
      <div className=" my-3 h-auto flex flex-col justify-center items-center rounded-lg ">
        <div className=" text-4xl fixed top-0 mt-20 w-screen text-center font-extrabold text-red-500 font-serif bg-gray-200">
          Projects
        </div>
        <div className="cardContainer mt-32 h-auto w-3/4 border-2 border-gray-400 rounded-lg">
          <div class="grid grid-cols-3 gap-4 bg-gray-200">
            
            
            <div class="">
              <Card />
            </div>
            
            <div class=" ">
              <Card />
            </div>
            <div class=" ">
              <Card />
            </div>
            <div class=" ">
              <Card />
            </div>
            <div class="">
              <Card />
            </div>
            
            <div class=" ">
              <Card />
            </div>
            <div class=" ">
              <Card />
            </div>
            <div class=" ">
              <Card />
            </div>
            <div class="  ">
              <Card />
            </div>
            <div class="  ">
              <Card />
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
