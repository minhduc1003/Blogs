import React from "react";


const Container = () => {
  
  return (
    <div className="p-[40px] flex justify-between items-center bg-gradient-to-tl to-[#00B4AA] from-[#A4D96C]  h-[520px] ">
      <div className="flex flex-col gap-[28px] max-w-[420px]">
        <h1 className="text-white text-2xl font-bold">Monkey Blogging</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
        <button className="w-[230px] h-[59px] text-[#23BB86] rounded-lg bg-white">Get Start</button>
      </div>
      <img src="./Illustration 2.png" alt="asd"></img>
    </div>
  );
};

export default Container;
