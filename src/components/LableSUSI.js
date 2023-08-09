import React, { useState } from "react";
import {useController} from "react-hook-form"
import CloseEye from "./CloseEye";
import OpenEye from "./OpenEye";
const LableSUSI = ({ name,control, placeholder, type,...props}) => {
  const [showPas, setShowPas] = useState(true);
  const {field}=useController({
    control,
    name,
    defaultValue:""
  })
  return (
    <>
      <label  htmlFor={type} className="mb-4 block">{type}</label>
      {type !== "Password" && (
        <input
          className="mb-6 border w-full rounded-lg p-3 outline-none focus:border-[#00B4AA]"
          placeholder={placeholder}
          id={type}
          {...field}
          {...props}
        ></input>
      )}
      {type === "Password" && (
        <div className="relative">
          <input
            className=" mb-6 border w-full rounded-lg p-3 pr-[60px] outline-none focus:border-[#00B4AA]"
            placeholder={placeholder}
            type={showPas?"password":"text"}
            id={type}
            {...field}
            {...props}
            autoComplete="off"
          ></input>
          <div onClick={()=>setShowPas(!showPas)} className="absolute right-4 top-[17px] cursor-pointer  ">
            {showPas ? (
              <CloseEye></CloseEye>
            ) : (
             <OpenEye></OpenEye>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LableSUSI;
