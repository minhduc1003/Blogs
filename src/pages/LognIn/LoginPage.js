import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ButtonSISU from "../../components/ButtonSISU";
import LableSUSI from "../../components/LableSUSI";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../fireBase-config";
import { NavLink, useNavigate } from "react-router-dom";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useAuth } from "../../contexts/auth-context";
const LoginPage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const regex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
  const schema = yup.object({
    email: yup
      .string()
      .matches(regex, "Please wirte correct form by email")
      .required("please enter your Email"),
    password: yup.string().required("Please enter your password"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    delayError: 3000,
    resolver: yupResolver(schema),
  });
  const colRef = collection(db, "users");

  function handleLogin(value) {
    if (!isValid) return;

    const q = query(colRef, where("email", "==", `${value.email}`),where("password","==",`${value.password}`));
   
    onSnapshot(q, (snapshot) => {
      let arr = [];
      snapshot.docs.forEach((doc) => {
        arr.push({
          id: doc.id,
          ...doc.data(),
        });
          signInWithEmailAndPassword(auth, value.email, value.password);
          toast.success("Login Success");
      });
     if(arr.length===0) toast.error("wrong email or password")
    });
  }

  function handleBtnLogin() {}
  useEffect(() => {
    if (userInfo?.email) navigate("/");

    const arrError = Object.values(errors);
    if (arrError.length > 0) {
      for (let i = 0; i < arrError.length; i++) {
        toast.error(arrError[i]?.message);
      }
    }
  }, [errors, navigate, userInfo]);
  return (
    <div className="max-w-[1440px] mx-auto p-16 ">
      <img className="block mx-auto" src="/logo.png" alt="sAd"></img>

      <h1 className="text-[#2EBAC1] text-center mt-5 mb-[80px] text-2xl font-bold">
        Monkey Blogging
      </h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="max-w-[500px] mx-auto mb-[50px]">
          <LableSUSI
            name={"email"}
            control={control}
            placeholder={"Please enter your email address"}
            type={"Email address"}
          ></LableSUSI>
          <LableSUSI
            name={"password"}
            control={control}
            placeholder={"Please enter your password"}
            type={"Password"}
          ></LableSUSI>
          <p className="text-base">Don’t have an account?<NavLink className={"text-[#2EBAC1]"} to={"/signup"}> Sign up</NavLink></p>
        </div>
      
        <div className="w-[160px] h-[50px] mx-auto">
        <ButtonSISU type="submit" onClick={handleBtnLogin}>
          {isSubmitting ? (
            <div className="w-7 h-7 border-4 border-l-transparent border-white mx-auto rounded-full animate-spin"></div>
          ) : (
            "Logn in"
          )}
        </ButtonSISU>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
