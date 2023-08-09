import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { auth } from "../fireBase-config";

const Header = () => {
  const {userInfo} =useAuth()
  return (
    <>
      <div className=" max-w-[1110px] mx-auto flex justify-between items-center m-8">
        <div className="flex gap-[23px] justify-center items-center">
          <img src="./mainLogo.png" alt="asd" />
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        <div className=" flex justify-center items-center gap-[30px]">
          <input
            className=" p-4 rounded-lg border border-gray-500 outline-none focus:border-[#00B4AA] "
            placeholder="Search posts..."
          ></input>
          {userInfo===null ? (
            <NavLink
              className="px-[50px] py-[19px] rounded-lg text-white bg-[#00B4AA]"
              to={"/login"}
            >
              Sign In
            </NavLink>
          ) : (
            <NavLink
              onClick={()=>{
                signOut(auth);
              }}
              
              className="px-[50px] py-[19px] rounded-lg text-white bg-[#00B4AA]"
            >
              {"Sign Out"}
            </NavLink>
          )}
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
