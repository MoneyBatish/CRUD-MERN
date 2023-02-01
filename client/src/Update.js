import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { URL } from './URL';

const Update = ({users,setUsers}) => {
    const {id}=useParams();
    const [user,setUser]=useState({});
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    useEffect(()=>{
        const n=users.find(u=>u._id===id);
        setUser(n);
        setName(n.name);
        setEmail(n.email);
        setAddress(n.address);
    },[id])
    const handleUpdate=async()=>{
        const config={
            headers:{
                'Content-Type':'application/json',
            }
        }
        try{
            const {data}=await axios.patch(`${URL}/users/update/${id}`,{name,email,address},config);
            const nusers=users?.map((u)=>{
                if(u._id===data._id)
                {
                    return data;
                }
                else{
                    return u;
                }
            })
            setUsers(nusers);
            setSuccess('User Updated Successfully');
            setError('');
        }catch(error)
        {
            setSuccess('');
            setError(error.response.data.message);
        }
    }
  return (
    <div style={{
        width:'100%',
        height:'97.5vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }}>
    <div style={{
        width:'300px',
        backgroundColor:'lightgray',
        borderRadius:'20px',
        padding:'50px',
        height:'fit-content',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        gap:'20px'
    }}>
        <div>
            <span>Name : </span>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
            <span>Email : </span>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <span>Address : </span>
            <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <button onClick={handleUpdate}>Update</button>
        {success && <span>{success}</span>}
        {error && <span>{error}</span>}
    </div>
    </div>
  )
}

export default Update