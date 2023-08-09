import React from 'react';

const Content = ({size,content,color}) => {
    return (
        <h2 className={` font-semibold ${size?size:"text-xl"} ${color}`}>{content|| "set up phòng cực chill"}</h2>
    );
};

export default Content;