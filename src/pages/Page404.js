import React from 'react';
import { NavLink } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='flex justify-center items-center h-[100vh] flex-col gap-5'>
            <img src="./logo.png" alt="" />
            <h1 className='text-3xl font-semibold text-red-500'>Oops! page not found</h1>
            <NavLink to={"/"} className={"p-4 bg-[#00B4AA] rounded-lg text-white"}> Back to Home</NavLink>
        </div>
    );
};

export default Page404;