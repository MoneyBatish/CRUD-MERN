import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { URL } from '../URL'
const Data = ({users,setUsers}) => {
    const deleteHandler=async(id)=>{
        const config={
            headers:{
                'Content-Type':'application/json',
            }
        }
        try{
            const newUsers=users?.filter((user)=>user._id!=id);
            setUsers(newUsers);
            const {data}=await axios.delete(`${URL}/users/delete/${id}`,config);
        }
        catch(error){
            console.log(error.response.data.message);
        }
    }
    const history=useNavigate();
  return (
    <div style={{
        width:'60%',
        height:'97.5vh',
        display:'flex',
        alignItems:'center'
    }}>
        <div style={{
            width:'100%',
            height:'fit-content',
            display:'flex',
            gap:'20px',
            justifyContent:'center',
            alignItems:'center',
            flexWrap:'wrap'
        }}>
        {users?.map((user)=>{
            return(
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column',
                width:'fit-content',
                height:'fit-content',
                padding:'20px',
                marginLeft:'10px',
                borderRadius:'20px',
                backgroundColor:'lightgray',
            }}>
                <span>Name : {user.name}</span>
                <span>Email : {user.email}</span>
                <span>Address : {user.address}</span>
                <div style={{
                    width:'100%',
                    display:'flex',
                    justifyContent:'center',
                    marginTop:'10px',
                    gap:'20px'
                }}>
                <button onClick={()=>{
                    deleteHandler(user._id)
                }}>delete</button>

                <button onClick={()=>{
                    history(`/user/${user._id}`)
                }}>Update</button>
                </div>
            </div>
            )
        })}
        {users?.length===0 && <span>No data Added Yet</span>}
        </div>
    </div>
  )
}

export default Data