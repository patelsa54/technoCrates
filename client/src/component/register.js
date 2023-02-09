import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'


function Register() {
    const [data, setData]=useState({
        firstName:"",
        lastName:"",
        phoneNo:"",
        aadharNo:"",    

    })
    function handleData(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const[error, setError]=useState("");

    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        try{
            const url="http://localhost:5000/api/register";
            axios.post(url, data).then(res=>{
                console.log(res.data.message)
              if(res.data.message=="Successfull")
              {
                
                console.log("User Succesfully registered")
                navigate('/userdashboard')
              }
              else if(res.data.message=="UnSuccessfull")
              {
                console.log("User alredy exits")
              }
            })
            
        }catch(error){
            console.log(error)
        }
    }


  return <div class="flex flex-col justify-center items-center">
  <div class="w-full max-w-xs">
        <form onSubmit={(e)=>handleSubmit(e)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                First Name
            </label>
            <input value={data.firstName} onChange={(e)=>handleData(e)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="firstname" required/>
            </div>
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Last Name
            </label>
            <input value={data.lastName} onChange={(e)=>handleData(e)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="lastname" required />
            </div>
            <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Phone No
            </label>
            <input value={data.phoneNo} onChange={(e)=>handleData(e)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phoneNo" type="number" placeholder="Phoneno"  required/>
            </div>
            <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="aadharNo">
                Aadhar Number
            </label>
            <input value={data.password} onChange={(e)=>handleData(e)} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="aadharNo" type="number" placeholder="" required />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
            </button>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
        </p>
        </div>
  </div>;
}

export default Register;
