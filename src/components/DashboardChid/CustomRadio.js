import React from "react";
import { useController } from "react-hook-form";

const CustomRadio = ({  name, checked, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue:""
  });
  return (
    <>
      <label className="w-8 h-8 lable ">
        <input
         
          checked={checked}
          type={"radio"}
          className="hidden"
          {...field}
          {...props}
        ></input>
        <div className="w-full h-full rounded-full bg-[#ccd0d7]"></div>
      </label>
    </>
  );
};

export default CustomRadio;
