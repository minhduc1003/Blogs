import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ButtonSISU from '../../components/ButtonSISU';

const DashBoardHeader = () => {
  const navigate = useNavigate()
    return (
        <div className="flex gap-3 justify-end border-b border-b-gray-200 p-4 ">
        <div  onClick={()=>navigate("/dashBoard/writenewpost")} className="w-[150px] h-[50px]  " >
          <ButtonSISU children={"Write new post"}></ButtonSISU>
        </div>
        <img
          className="w-12 h-12 rounded-full object-cover"
          alt=""
          src="/3.png"
        ></img>
      </div>
    );
};

export default DashBoardHeader;