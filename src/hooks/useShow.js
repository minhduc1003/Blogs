import { useEffect, useState } from "react";

 function useShow (id){
    const  [show,setShow]= useState(1)
    useEffect(()=>{
        setShow(id)
    },[id])
    return show
}
export {useShow}