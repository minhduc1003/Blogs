import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashBoardHeading from '../../components/DashBoardHeading';
import Delete from '../../components/Delete';
import Edit from '../../components/Edit';
import LableStatus from '../../components/LableStatus';
import { userRole, userStaus } from '../../constant';
import { db } from '../../fireBase-config';

const DashBoardUser = () => {
    const navigate = useNavigate()
    const [data,setData]=useState([])
    function getstatus(status){
        switch(status){
            case (userStaus.userActive):
            return <LableStatus type={"success"} childen={"Active"}></LableStatus>
            case (userStaus.userPending):
                return <LableStatus type={"warning"} childen={"Pending"}></LableStatus>
            case(userStaus.userBan):
                return <LableStatus type={"danger"} childen={"Ban"}></LableStatus>
            default:
        }
    }
    function getRole(role){
        switch(role){
            case(userRole.user):
            return <h3>User</h3>
            case(userRole.userAdmin):
            return <h3>Admin</h3>
            case(userRole.userMod):
            return <h3>Mod</h3>
            default:
                break
        }
    }
    useEffect(()=>{
        const colRef= collection(db,"users")
        onSnapshot(colRef,(snapshot)=>{
            const arr=[]
            snapshot.forEach((item)=>{
               arr.push(item.data())
            })
            setData(arr)
        })
    },[])
    return (
        <>
             <DashBoardHeading text={"User"} children={"Manage your user"}></DashBoardHeading>
             <table className='table-auto table  '>
          <thead>
            <tr>
              <th>Id</th>
              <th>info</th>
              <th>Username</th>
              <th>emailAddress</th>
              <th>Status</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            data.length>0&&data.map((user,index)=>
            <tr  className='font-medium' key={index}>
             <td title={user.uid}>{user.uid.slice(0,4)+"..."}</td>
             <td >
                <div className='flex gap-3 items-center flex-shrink-0 rounded-lg'>
                    <img className='w-10 h-10 object-cover rounded-lg' alt='' src={user.photo} />
                    <div>
                        <h3>{user.fullName}</h3>
                        <h3 className='text-sm text-gray-400'>{new Date().toLocaleDateString("VI-vi")}</h3>
                    </div>
                </div>
             </td>
             <td>{user?.userName}</td>
             <td>{user.email}</td>
             <td>{getstatus(1)}</td>
             <td>{getRole(3)}</td>
             <td>
               <div className='flex justify-center items-center gap-x-3'>
               <Edit onClick={()=>navigate(`/dashBoard/update-user?id=${user.uid}`)}></Edit>
               <Delete></Delete>
               </div>
             </td>
            </tr>)
          }
            
          </tbody>
        </table>
        </>
    );
};

export default DashBoardUser;