import { updateProfile } from "firebase/auth";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonSISU from "../../components/ButtonSISU";
import LableInputDashBoard from "../../components/DashboardChid/LableDashBoard";
import DashBoardHeading from "../../components/DashBoardHeading";
import UploadImage from "../../components/UploadImage";
import { auth, db } from "../../fireBase-config";
import useFireBaseImage from "../../hooks/useFireBaseImage";
const UserEdit = () => {
  const navigate = useNavigate()
    const [defaultImage,setDefaultImage]=useState("")
  const [params] = useSearchParams();
  const userId = params.get("id");
  console.log(defaultImage)
  const {
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    control,
    setValue,
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      photo: "",
      uid: "",
    },
  });
  const {
    deleteImage,
    getImage,
    handleUploadImage,
    imgaeUrl,
    progress,
    setImageUrl,
  } = useFireBaseImage(setValue, getValues);
  async function submitForm(value) {
    const colRef = doc(db, "users", userId);
    await updateDoc(colRef,{
      ...value
    })
    toast.success("update user information successfully")
    navigate("/dashBoard/user")
  }
  useEffect(() => {
    const colRef = doc(db, "users", userId);
    onSnapshot(colRef, (snapshot) => {
      const setData = snapshot.data();
    setDefaultImage(setData.photo)
    
      reset({
        ...setData,
        
        photo:imgaeUrl
      });
    });
  }, [imgaeUrl]);

  return (
    <div className="flex flex-col gap-y-[4rem]">
      <DashBoardHeading
        text={"Edit User"}
        children={"Manage your User"}
      ></DashBoardHeading>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="grid grid-cols-2 gap-16 mb-[80px] ">
          <LableInputDashBoard
            childen={"Full name"}
            name={"fullName"}
            type={"text"}
            control={control}
            placeholder={"Enter your full name"}
          ></LableInputDashBoard>
          <LableInputDashBoard
            childen={"Email"}
            name={"email"}
            type={"text"}
            control={control}
            placeholder={"Enter your email"}
          ></LableInputDashBoard>
          <LableInputDashBoard
            childen={"Password"}
            name={"password"}
            type={"text"}
            control={control}
            placeholder={"Enter your password"}
          ></LableInputDashBoard>
          <div>
            <h3 className="mb-4 font-semibold text-base">Upload Imgae</h3>
            <UploadImage
              onClick={()=>{
                defaultImage?setDefaultImage(null):deleteImage()
                imgaeUrl?setImageUrl(null):deleteImage()
              }}
              url={!imgaeUrl?defaultImage:imgaeUrl}
              onChange={getImage}
              progress={progress}
            ></UploadImage>
          </div>
        </div>
        <ButtonSISU
          children={"Submit"}
          type={"submit"}
          addClass={"!w-[8rem] !h-[4rem] mx-auto"}
        ></ButtonSISU>
      </form>
    </div>
  );
};

export default UserEdit;
