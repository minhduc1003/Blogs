import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../fireBase-config";

const AuthContext = createContext()
function AuthProvider(props){
const [userInfo,setUserInfo]=useState({})
const values = {userInfo,setUserInfo}
useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        setUserInfo(user)
    })
},[])
return <AuthContext.Provider value={values} {...props}></AuthContext.Provider>
}
function useAuth(){
    const context=useContext(AuthContext)
    if(typeof context ==="undefined") throw new Error("use auth must be used within AuthProvider")
    return context
}
export {AuthProvider,useAuth}