import React from 'react';

const DayAndAuthor = ({date,author,color}) => {
    return (
        <div className={`flex gap-2  text-lg font-normal justify-center items-center ${color?"text-[#6B6B6B]":"text-white"}`}>
        <div >{date}</div>
        <div className='w-1 h-1 rounded-full bg-white'></div>
        <div>{author}</div>
      </div>
    );
};

export default DayAndAuthor;