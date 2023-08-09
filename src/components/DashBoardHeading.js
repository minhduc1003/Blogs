import React from 'react';

const DashBoardHeading = ({text,children}) => {
    return (
        <div className='flex flex-col gap-3'>
            <h1 className="text-[#2EBAC1] text-2xl font-bold">{text}</h1> 
            <p className='text-gray-400'>{children}</p>
        </div> 
    );
};

export default DashBoardHeading  