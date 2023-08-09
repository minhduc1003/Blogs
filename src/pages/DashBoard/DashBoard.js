import React from 'react';
import DashBoardHeaer from "./DashBoardHeader"
import NavBar from "../../components/DashboardChid/NavBar"
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
import Page404 from "../Page404"
const DashBoard = () => {
    const {userInfo} = useAuth()
    if(!userInfo) return <Page404></Page404>
    return (
       <div className='transition-all'>
        <DashBoardHeaer></DashBoardHeaer>
        <div className='flex gap-[100px] max-w-[1440px] mx-auto mt-6'>
        <NavBar></NavBar>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
        </div>
       </div>
    );
};

export default DashBoard;