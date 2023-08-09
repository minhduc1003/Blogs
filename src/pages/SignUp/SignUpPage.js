import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ButtonSISU from "../../components/ButtonSISU";
import LableSUSI from "../../components/LableSUSI";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../fireBase-config";
import { useNavigate, NavLink } from "react-router-dom";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { userRole, userStaus } from "../../constant";

const SignUpPage = () => {
  const navigate = useNavigate();
  const regex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
  const schema = yup.object({
    fullName: yup.string().required("Please enter your full name "),
    email: yup
      .string()
      .matches(regex, "Please wirte correct form by email")
      .required("please enter your Email"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    delayError: 3000,
    resolver: yupResolver(schema),
  });
  async function handleSignUp(value) {
    console.log(value);
    if (!isValid) return;
    await createUserWithEmailAndPassword(auth, value.email, value.password);
    await updateProfile(auth.currentUser, {
      displayName: value.fullName,
      photoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png?20220226140232",
    });
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      fullName: value.fullName,
      email: value.email,
      password: value.password,
      photo: auth.currentUser.photoURL,
      uid: auth.currentUser.uid,
      status: userStaus.userActive,
      role: userRole.user,
      createdAt: serverTimestamp(),
    });
    // await addDoc(colRef, {
    //   fullName: value.fullName,
    //   email: value.email,
    //   password: value.password,
    // });
    toast.success("Register success");
    navigate("/");
  }
  function handleBtnSignup() {}
  useEffect(() => {
    const arrError = Object.values(errors);
    if (arrError.length > 0) {
      for (let i = 0; i < arrError.length; i++) {
        toast.error(arrError[i]?.message);
      }
    }
  }, [errors]);
  return (
    <div className="max-w-[1440px] mx-auto p-16 ">
      <img className="block mx-auto" src="/logo.png" alt="sAd"></img>
      <h1 className="text-[#2EBAC1] text-center mt-5 mb-[100px] text-2xl font-bold">
        Monkey Blogging
      </h1>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="max-w-[500px] mx-auto mb-[50px]">
          <LableSUSI
            name={"fullName"}
            control={control}
            placeholder={"Please enter your fullname"}
            type={"Fullname"}
          ></LableSUSI>
          <LableSUSI
            control={control}
            placeholder={"Please enter your email address"}
            type={"Email address"}
            name={"email"}
          ></LableSUSI>
          <LableSUSI
            control={control}
            placeholder={"Please enter your password"}
            type={"Password"}
            name={"password"}
          ></LableSUSI>
          <p className="text-base">
            Do you have an account?
            <NavLink className={"text-[#2EBAC1]"} to={"/login"}>
              {" "}
              Login
            </NavLink>
          </p>
        </div>

        <div className="w-[150px] h-[50px] mx-auto">
          <ButtonSISU
            disabled={isSubmitting ? true : false}
            type="submit"
            onClick={handleBtnSignup}
          >
            {isSubmitting ? (
              <div className="w-7 h-7 border-4 border-l-transparent border-white mx-auto rounded-full animate-spin"></div>
            ) : (
              "Sign Up"
            )}
          </ButtonSISU>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
