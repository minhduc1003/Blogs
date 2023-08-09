import React from "react";
import { useController } from "react-hook-form";

const LableInputDashBoard = ({ type, placeholder, name, childen,control,...props }) => {
  const {field}=useController({
    control,
    name,
    defaultValue:""
  })
  return (
    <div className="flex flex-col gap-3">
      <label className=" font-semibold" htmlFor={name}>
        {childen}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        
        className={"p-4 w-full rounded-lg  bg-[#d6d8db] outline-none"}
        {...field}
        {...props}
       
      ></input>
    </div>
  );
};

export default LableInputDashBoard;
