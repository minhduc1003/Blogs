import React from "react";

const Toggle = ({ on = false, onClick, ...props }) => {
  return (
    <label>
      <input
        type={"checkbox"}
        checked={on}
        onChange={() => {}}
        onClick={onClick}
        className={"hidden"}
      ></input>
      <div
        className={`relative w-[70px] h-[40px] rounded-full cursor-pointer p-1 transition-all ${
          on ? "bg-green-400" : "bg-slate-400"
        }`}
        {...props}
      >
        <div
          className={`absolute w-8 h-8 rounded-full transition-all bg-white z-10 ${
            on ? "translate-x-[30px]" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Toggle;
