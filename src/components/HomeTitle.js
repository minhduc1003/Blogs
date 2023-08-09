import React from 'react';

const HomeTitle = ({title}) => {
    return (
        <div className='relative mb-[40px]'>
            <h1 className=' text-[#3A1097] text-3xl font-semibold before:content-[""] before:absolute before:top-0 before:w-[50px] before:h-[3px] before:bg-[#00D1ED]  ' >
            {title}
        </h1>
        </div>
    );
};

export default HomeTitle;