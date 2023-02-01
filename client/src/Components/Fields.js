import { useState } from "react"
import axios from "axios"
import "./Fields.css"
import { URL } from "../URL";
const Fields=({users,setUsers})=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [error,setError]=useState('');
    const submit=async()=>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        try{
            const {data}=await axios.post(`${URL}/users`,{name,email,address},config);
            setUsers([data,...users])
        }
        catch(error)
        {
            setError(error.response.data.message);
        }
    }
    return(
        <div className="div1">
        <div className="div2">
        <span>Name:</span>
        <input type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}></input>
        <span>Email:</span>
        <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}></input>
        <span>Address:</span>
        <input type="Address" placeholder="Address" onChange={(e)=>{setAddress(e.target.value)}}></input>
        </div>
        <button onClick={submit}>Submit</button>
        {error && <span>{error}</span>}
        </div>
    )
}

export default Fields;