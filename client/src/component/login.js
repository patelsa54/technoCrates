import React from "react";
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
function Login() {
    const [error,setError]= useState(null);
    const [data, setData]=useState({
        phoneNo:"",
        aadharNo:"",    

    })
    function handleData(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        try{
            const url="http://localhost:5000/api/login";
            await axios.post(url, data).then(res=>{
                console.log(res.data.message)
              if(res.data.message=="Successfull")
              {
                
                console.log("Login successfully")
                const userdata=res.data.user;
                console.log("backend data "+ userdata.firstName);
                console.log("backend data : "+userdata.lastName)
                localStorage.setItem("aadharNo", userdata.aadharNo);
                localStorage.setItem("phoneNo", userdata.phoneNo);
                
                navigate('/userdashboard')
              }
              else if(res.data.message=="UnSuccessfull")
              {
                console.log("User does not exits")
                setError("User does not exits");
              }
            })
            
        }catch(error){
            console.log(error)
        }
    }

  return <div class="flex flex-col justify-center items-center">
        <div class=" w-full max-w-xs">
        <form action="#" onSubmit={(e)=>handleSubmit(e)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="phoneNo">
                Phone Number
            </label>
            <input value={data.phoneNo} onChange={(e)=>handleData(e)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phoneNo" type="number" placeholder="phoneNo" />
            </div>
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="aadharNo">
                Aadhar Number
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={data.aadharNo} onChange={(e)=>handleData(e)} id="aadharNo" type="number" placeholder="aadharNo" />
            </div>
            <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                sign in to patient account
            </button>
            
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
        
        </p>
        </div>
  
  </div>;
}

export default Login;
