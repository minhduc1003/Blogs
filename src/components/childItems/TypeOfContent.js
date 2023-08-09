import React from 'react';

const TypeOfContent = ({type,color}) => {
    return (
        <div className={`flex justify-center items-center w-fit  px-3 py-1 rounded-lg text-gray-500 ${color?color:"bg-white"}`}>{type}</div>
    );
};

export default TypeOfContent;