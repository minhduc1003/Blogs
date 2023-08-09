import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, matchPath, useMatch } from "react-router-dom";
import { logo } from "../../logo";

const NavBar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(1);
  const match = useMatch("/dashBoard/writenewpost");
useEffect(()=>{
  if (match) {
    setActive(null);
  }
},[match])
  return (
    <div className="shadow-lg rounded-lg p-8 h-[400px] ">
      <div className="flex gap-5 justify-center items-center mb-[20px]">
        <img className="w-10 h-10 object-contain " src="/logo.png" alt="" />

        <h3 className="text-lg font-semibold">Monkey Blogging</h3>
      </div>
      {logo.map((item) => (
        <div
          key={item.name}
          onClick={() => {
            navigate(item.link);

            setActive(item.id);
          }}
          className={` 
        flex gap-4 text-[#2EBAC1] font-medium p-4 rounded-lg cursor-pointer ${
          active === item.id ? "bg-slate-600" : ""
        } `}
        >
          <div>{item.icon}</div>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
