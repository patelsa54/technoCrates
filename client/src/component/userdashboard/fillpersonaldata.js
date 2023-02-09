import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

function Fillpersonaldata() {
    const aadharNo=localStorage.getItem("aadharNo");
   const phoneNo=localStorage.getItem("phoneNo");
console.log("aadhar no :"+aadharNo);
    const [personaldata, setPersonalData]=useState({
        aadharNo:aadharNo,
        birthDate:"",
        age:0,
        gender:"",
        weight:0,
        height:0,
        address:"",
        medicalproblem:"",
        allergies:"",
        medication:""

    })
    function handleData(e){
        const newdata={...personaldata}
        newdata[e.target.id]=e.target.value
        setPersonalData(newdata)
        console.log(newdata)
    }

    const[error, setError]=useState("");

    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        try{
            const url="http://localhost:5000/api/fillpersonaldetail";
            await axios.post(url, personaldata).then(res=>{
                console.log(res.data.message)
                if(res.personaldata.message=="Successfull")
                {
                    console.log("User Succesfully registered")
                    navigate('/userdashboard')
                }
                else if(res.personaldata.message=="UnSuccessfull")
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
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="birthDate">
            birthDate
        </label>
        <input value={personaldata.birthDate} onChange={(e)=>handleData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="birthDate" type="date" />
    </div>

    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="age">
            Age
        </label>
        <input value={personaldata.age} onChange={(e)=>handleData(e)}  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="age" type="number"  />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/3 px-3">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="gender">
        Gender
      </label>
    <div class="relative">
    <select value={personaldata.gender} onChange={handleData} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
  </div>
    </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="address">
            Address
        </label>
        <input value={personaldata.address} onChange={(e)=>handleData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="address" type="text" placeholder="xyz, country" />
    </div>

    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="height">
            Height
        </label>
        <input value={personaldata.height} onChange={(e)=>handleData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="height" type="number" placeholder="165cm" />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/3 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="weight">
            Weight
        </label>
        <input value={personaldata.weight} onChange={(e)=>handleData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="weight" type="number" placeholder="65kg" />
    </div>
    </div>

    

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="medicalproblem">
         Medical Problem
      </label>
      <input value={personaldata.medicalproblem} onChange={(e)=>handleData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="medicalproblem" type="text" placeholder="headache, cough, asthama" />
      <p class="text-gray-600 text-xs italic">fill out all medical problems</p>
    </div> 
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="allergies">
          Allergies 
      </label>
      <input value={personaldata.allergies} onChange={(e)=>handleData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="allergies" type="text" placeholder="lactose intollerance...." />
    </div> 
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="medication">
           Undertaking Medicines
      </label>
      <input value={personaldata.medication} onChange={(e)=>handleData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="medication" type="text" placeholder="vitamin tablets, serum...." />
    </div> 
  </div>
  <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
  Sign Up
</button>
</form>
  </div>;
}

export default Fillpersonaldata;
