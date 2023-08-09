import { data } from "autoprefixer";
import { collection, getDoc, limit, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ButtonSISU from "../../components/ButtonSISU";
import PostList from "../../components/DashboardChid/PostList";
import DashBoardHeading from "../../components/DashBoardHeading";
import { db } from "../../fireBase-config";

const PostItems = () => {
  const [postData,setPostData]=useState([])
  const [handleLimit,setHandleLimit]=useState(1)
  console.log(postData.length)
  
  useEffect(()=>{ 
      const colref = collection(db,"posts")
      const q = query(colref,limit(handleLimit))
      
      onSnapshot(q,(snapshot)=>{
        const data =[]
        snapshot.forEach((item)=>{
           data.push(item.data())
        })
        setPostData(data)
      })
    

  },[handleLimit])
  return (<>

    <div className="flex flex-col gap-[50px]">
      <DashBoardHeading text={"Manage post"}></DashBoardHeading>
      <div className="flex justify-end">
        <input
          className="border border-gray-500 p-3 rounded-lg outline-none"
          placeholder="Search post..."
        ></input>
      </div>
      <PostList data={postData}></PostList>
      <ButtonSISU children={"Show More"} addClass={'!w-[11rem] mx-auto !h-[3.5rem]'} disabled={handleLimit===postData.length?false:true} onClick={()=>setHandleLimit(handleLimit+1)}></ButtonSISU>
    </div>
   
  </>

  );
};

export default PostItems;
