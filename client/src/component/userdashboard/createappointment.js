import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

function Createappointment() {
  const aadharNo=localStorage.getItem("aadharNo");
    const phoneNo=localStorage.getItem("phoneNo");
    console.log("aadhar no :"+aadharNo);

    const [data, setPersonalData]=useState({
        aadharNo: aadharNo,
        vdate:"",
        time:"1pm",
        result:"positive",
        gender:"male",
        weight:0,
        height:0,
        address:"",
        medicalproblem:"",
        allergies:"",
        medication:""

    })

    function handleData(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setPersonalData(newdata)
        console.log(newdata)
    }

    const[error, setError]=useState("");

    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        try{
            const url="http://localhost:5000/api/registerpersonal";
            await axios.post(url,data).then(res=>{
                console.log(res)
                if(res.data.message=="Successfull")
                {
                    console.log("User Succesfully registered")
                    navigate('/userdashboard')
                }
                else if(res.data.message=="UnSuccessfull")
                {
                    console.log("unsuccessfull")
                }
                })
            
        }catch(error){
            console.log(error)
        }
    }


  return <div>
  <form onSubmit={(e)=>handleSubmit(e)} class="w-full max-w-full">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="birthDate">
            visiting date
        </label>
        <input value={data.vdate} onChange={(e)=>handleData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="vdate" type="date" />
    </div>

    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="time">
            checked up by?
        </label>
        <input value={data.doctorName} onChange={(e)=>handleData(e)}  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="doctorName" type="text"  />
    </div>

    
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="test">
        Test undertaken
      </label>
    <div class="relative">
    <select value={data.gender} onChange={handleData} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="gender">
      <option value="male">Albumin Blood Test</option>
      <option value="female">Ammonia Levels</option>
      <option value="other">Anoscopy</option>
      <option value="other">Cognitive Testing</option>
      <option value="other">Crystals in Urine</option>
      <option value="other">Cognitive Testing</option>
      <option value="other">other</option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
  </div>
    </div>

    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="height">
            Result :
        </label>
        <input value={data.result} onChange={(e)=>handleData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="height" type="text" placeholder="positive/negative" />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    
    </div>

    

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="medicalproblem">
         upload report
      </label>
      <input  onChange={(e)=>handleData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="medicalproblem" type="file"/>
      <p class="text-gray-600 text-xs italic">fill out all medical problems</p>
    </div> 
  </div>

  

  

</form>
  
  </div>;
}

export default Createappointment;
