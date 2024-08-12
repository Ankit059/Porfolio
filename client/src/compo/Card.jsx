import React from "react";

export const Card = () => {
  return (
    <>
      <div className="flex flex-col border-2 border-gray-400 rounded-xl w-96 h-80 m-8  ">
        <div className="border-2 flex justify-center items-center h-60 w-96 hover:overflow-visible hover:h-80 rounded-t-xl bg-gray-900  cursor-pointer">
          {/* img */}
        </div>
        <div className=" flex flex-col border-2 h-20 border-gray-400 rounded-b-lg hover:h-2/5">
          <div className=" font-bold font-serif px-2 hover:underline cursor-pointer">Project Name :</div>
          <div className="text-xs font-sans overflow-hidden px-2">
            Project Description Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Deserunt, delectus! Error vero sint distinctio at iste facere.
            Delectus beatae veniam natus id alias.
          </div>
        </div>
      </div>
    </>
  );
};
