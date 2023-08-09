import React, { useState } from "react";
import { useController, useWatch } from "react-hook-form";

const DropDown = ({ setValue, control, name, ...props }) => {
  const [active, setActive] = useState(false);
  const value = useWatch({
    control,
    name: "category",
    defaultValue: "",
  });
  function handleClick(e) {
    setValue(name, e.target.dataset.value);
    setActive(false);
  }

  return (
    <div className="relative font-medium">
    <div className="mb-[10px]">Category</div>
      <div
        onClick={() => setActive(!active)}
        className="bg-[#d6d8db] w-full h-[50px] rounded-lg flex justify-between items-center p-4"
      >
        <span>{value || "Select the category"}</span>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={` absolute bg-[#d6d8db] w-full rounded-b-xl top-[89px]  ${
          active ? "" : "hidden"
        } transition-all`}
      >
        <div className="p-4 " onClick={handleClick} data-value={"Kiến thức"}>
          Kiến thức
        </div>
        <div className="p-4 " onClick={handleClick} data-value={"Trải nghiệm"}>
          Trải nghiệm
        </div>
        <div className="p-4 " onClick={handleClick} data-value={"Tin trong ngày"}>
          Tin trong ngày
        </div>
      </div>
    </div>
  );
};

export default DropDown;
