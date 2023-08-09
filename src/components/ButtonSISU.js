import React, { Children } from 'react';

const ButtonSISU = ({disabled,children,onClick=()=>{}, type="button" ,addClass,...props }) => {
    
    return (
        <button disabled={disabled} onClick={onClick} type={type} {...props} className={` text-white rounded-md h-full w-full  block bg-gradient-to-r from-[#00A7B4] to-[#A4D96C] ${addClass}`} >
            {children}
        </button>
    );
};

export default ButtonSISU;