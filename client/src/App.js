import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Update from './Update';
import { URL } from './URL';
const App = () => {
    //hello
    const [users,setUsers]=useState([]);
    const getUsers=async()=>{
        const config={
            headers:{
                'Content-Type':'application/json',
            }
        }
        try{
            const {data}=await axios.get(`${URL}/users`,config);
            setUsers(data);
        }
        catch(error)
        {
            console.log(error.response);
        }
    }
    useEffect(()=>{
        getUsers();
    },[])
    console.log(users);
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home users={users} setUsers={setUsers}/>}/>
                <Route path='/user/:id' element={<Update users={users} setUsers={setUsers}/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App