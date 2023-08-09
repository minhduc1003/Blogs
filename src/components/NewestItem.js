import React from 'react';
import Content from './childItems/Content';
import DayAndAuthor from './childItems/DayAndAuthor';
import TypeOfContent from './childItems/TypeOfContent';

const NewestItem = ({overShow,size,outSide}) => {
    return (
        <div className={`flex gap-5 ${overShow} `}>
          <img className={`${size?size:"w-[181px]"} rounded-lg object-fill`} src="./unsplash_gvptKmonylk.png" alt="" />
          <div className="flex gap-4 flex-col">
            <TypeOfContent color={outSide?outSide:""} type={"Kiến thức"}></TypeOfContent>
            <Content></Content>
            <DayAndAuthor color></DayAndAuthor>
          </div>
        </div>
    );
};

export default NewestItem;