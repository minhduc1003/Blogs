import React, { useState } from "react";
import CustomRadio from "../../components/DashboardChid/CustomRadio";
import LableInputDashBoard from "../../components/DashboardChid/LableDashBoard";
import DropDown from "../../components/DashboardChid/DropDown";
import { useForm } from "react-hook-form";
import ButtonSISU from "../../components/ButtonSISU";
import DashBoardHeading from "../../components/DashBoardHeading";
import slugify from "react-slugify";

import {addDoc, collection,serverTimestamp} from "firebase/firestore"
import UploadImage from "../../components/UploadImage";
import useFireBaseImage from "../../hooks/useFireBaseImage";
import Toggle from "../../components/Toggle";
import { db } from "../../fireBase-config";
import { useAuth } from "../../contexts/auth-context";
import { toast } from "react-toastify";

const AddNewPost = () => {
  const {
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    control,
    setValue,
    getValues,
    reset
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 2,
      category: "",
      hot:false
    },
  });
  
  const {userInfo} = useAuth()
  
  const hotToggle = watch("hot")
  const watchStatus = watch("status");
  watch("category");
  const { deleteImage, getImage, handleUploadImage, imgaeUrl, progress,setImageUrl } =
    useFireBaseImage(setValue, getValues);
  async function handleCreatePost(value) {
    const cloneValue = { ...value };
    cloneValue.slug = slugify(value.slug || value.title,{lower:true});
    cloneValue.status = Number(value.status);
    const colRef = collection(db,"posts")
    await addDoc(colRef,{
      ...cloneValue,
      image:imgaeUrl,
      userId:userInfo.uid,
      createdAt: serverTimestamp()
    })
    toast.success("upload success ")
    reset({
      title: "",
      slug: "",
      status: 2,
      category: "",
      hot:false,
      image:"",
    })
    setImageUrl("")
  }

  return (
    <div className="flex flex-col gap-[60px]">
      <DashBoardHeading text={"Add new post"}></DashBoardHeading>
      <form onSubmit={handleSubmit(handleCreatePost)}>
        <div className="grid grid-cols-2 gap-16 mb-[80px] ">
          <LableInputDashBoard
            childen={"Title"}
            name={"title"}
            type={"text"}
            placeholder={"Enter your title"}
            control={control}
          ></LableInputDashBoard>
          <LableInputDashBoard
            childen={"Slug"}
            name={"slug"}
            type={"text"}
            placeholder={"Enter your title"}
            control={control}
          ></LableInputDashBoard>
          <div className="flex gap-5 font-medium">
            <div className="flex gap-3 justify-center items-center">
              <CustomRadio
                checked={Number(watchStatus) === 1}
                value={1}
                control={control}
                name={"status"}
              ></CustomRadio>
              <span>Approved</span>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <CustomRadio
                checked={Number(watchStatus) === 2}
                value={2}
                control={control}
                name={"status"}
              ></CustomRadio>
              <span>Pedding</span>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <CustomRadio
                checked={Number(watchStatus) === 3}
                value={3}
                control={control}
                name={"status"}
              ></CustomRadio>
              <span>Reject</span>
            </div>
          </div>
          <LableInputDashBoard
            childen={"Author"}
            name={"author"}
            type={"text"}
            placeholder={"Enter your title"}
            control={control}
          ></LableInputDashBoard>

          <div>
            <h3 className="mb-4 font-semibold text-base">Upload Imgae</h3>
            <UploadImage
              onClick={deleteImage}
              url={imgaeUrl}
              onChange={getImage}
              progress={progress}
            ></UploadImage>
          </div>
          <DropDown
            control={control}
            setValue={setValue}
            name="category"
          ></DropDown>
          <div className="flex flex-col gap-[10px]">
          <h3 className="font-semibold">Feature Post</h3>
          <Toggle on={hotToggle===true} onClick={()=>setValue("hot",!hotToggle)}></Toggle>
          </div>
        </div>
        <div className="w-[150px] h-[60px] mx-auto">
          <ButtonSISU  type="submit" children={"Write new post"}></ButtonSISU>
        </div>
      </form>
    </div>
  );
};

export default AddNewPost;
