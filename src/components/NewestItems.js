import React from "react";
import Content from "./childItems/Content";
import DayAndAuthor from "./childItems/DayAndAuthor";
import TypeOfContent from "./childItems/TypeOfContent";
import NewestItem from "./NewestItem";

const NewestItems = () => {
  return (
    <div className="flex gap-[50px] max-h-[700px] mb-[100px] ">
      <div className="flex flex-col ">
        <img className="flex-1" src="./unsplash_gvptKmonylk.png" alt="" />
        <div className="flex flex-col gap-4 mt-3">
          <TypeOfContent type={"Kiến thức"} color={"bg-[#F3EDFF]"}></TypeOfContent>
          <Content></Content>
          <DayAndAuthor color></DayAndAuthor>
        </div>
      </div>
      <div className="bg-[#F3EDFF] p-[30px] flex flex-col gap-[50px] rounded-xl flex-1">
        <NewestItem></NewestItem>
        <NewestItem></NewestItem>
        <NewestItem></NewestItem>
      </div>
    </div>
  );
};

export default NewestItems;
