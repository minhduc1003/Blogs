import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../fireBase-config";
import Content from "./childItems/Content";
import DayAndAuthor from "./childItems/DayAndAuthor";
import TypeOfContent from "./childItems/TypeOfContent";

const FeatureItems = ({data}) => {
  const [userId,setUserId]= useState("")
  useEffect(()=>{
      async function getName(){
        const docRef = doc(db,"users",data.userId)
        const getUserId = await getDoc(docRef)
        setUserId(getUserId.data())
      }
      getName()
  },[data.userId])
  if(!data||!data.userId) return null
  const date = data?.createdAt ?new Date(data.createdAt.seconds*1000):new Date()
  const fromatDate = new Date(date).toLocaleDateString("vi-VI")
  return (
    <div className="w-[360px]  rounded-lg relative">
    <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)] rounded-lg "></div>
      <img className="z-0 rounded-lg" src={data.image} alt="asd"></img>
      <div className="z-10 absolute inset-0 pt-6 pl-6 pr-2 text-white ">
        <div className="flex justify-between items-center mb-6">
         <TypeOfContent type={data.category}></TypeOfContent>
         <DayAndAuthor date={fromatDate} author={userId?.fullName}></DayAndAuthor>
        </div>
        <Content content={data.title}></Content>
      </div>
    </div>
  );
};

export default FeatureItems;
