import React from "react";
import img from "./boyImg.jpg";

export const Main = () => {
  return (
    <>
      <div className="flex items-center fixed justify-center h-screen mt-4 bg-black">
        {/* <div className=" text-4xl fixed top-0 mt-20 w-screen text-center font-extrabold text-red-500 font-serif bg-gray-200">
          Welcome to my Portfolio
        </div> */}
        <div className="cardContainer mt-40 ml-10 mb-8 h-auto w-4/5   border-gray-400 rounded-lg">
          <div class="grid grid-cols-2 gap-4 font-serif ">
            <div class="h-auto mt-48  items-center p-4 justify-center  border-white  text-white ">
              <div className=" text-lg text-white  ">My Name</div>
              <div className=" text-4xl text-white mt-3 font-bold">
                Ankit Pundir
              </div>
              <div className=" text-6xl text-white mt-3 font-bold">
                I'M A <span className=" text-yellow-500">Web Designer</span>
              </div>
              <div className="mt-3 w-11/12">
                asd Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fuga culpa voluptatibus voluptatum natus facere a eveniet,
                assumenda optio sed facilis reprehenderit odit minus
                necessitatibus aperiam, ex perspiciatis voluptatem expedita
                inventore ea officia neque. Nesciunt atque quia ipsam saepe
                voluptas rerum possimus officia tempora a quas! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nesciunt
                repudiandae officia ex.
              </div>

              <div className="mt-6 text-sm relative">
                <button className=" px-5 py-2 rounded-3xl bg-pink-500 absolute left-0 active:px-1 active:ml-2 active:mt-1 active:py-1">
                  HIRE ME
                </button>
                <button className=" px-4 py-2 rounded-3xl bg-white text-pink-500 ml-2 absolute left-24  active:px-1 active:py-1 active:ml-5 active:mt-1">

                  LEARN MORE
                </button>
              </div>
            </div>
            <div class="h-3/4 flex items-center p-4 justify-center   ">
              <img src={img} className=" ml-10 w-4/5" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
