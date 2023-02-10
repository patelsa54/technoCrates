import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Fillpersonaldetail from './fillpersonaldata';

function Personaldetail() {
    const[userpersonaldetail, setUserPersonalDetail]=useState(null);
    const aadharNo=localStorage.getItem("aadharNo");
   const phoneNo=localStorage.getItem("phoneNo");
   const userdata= localStorage.getItem("userdata");
   const firstName=localStorage.getItem("firstName");
   const lastName=localStorage.getItem("lastName");

   console.log("user "+userdata)
    React.useEffect(() => {
        axios.get('http://localhost:5000/api/personaldetail', {
        params: {
          aadharNo: aadharNo,
          phoneNo:phoneNo
        }
      })
      .then(res => {
        console.log("res data "+res.data);
        let personaldata={
        birthDate:res.data.birthDate,
        age:res.data.age,
        gender:res.data.gender,
        weight:res.data.weight,
        height:res.data.height,
        address:res.data.address,
        medicalproblem:res.data.medicalproblem,
        allergies:res.data.allergies,
        medication:res.data.medication,
        }
        setUserPersonalDetail(personaldata);
        
      })
      .catch(function (error) {
          console.log(error);
      })
      }, []);

      if (!userpersonaldetail) return <div> <Fillpersonaldetail/></div>;
    
  return <div>

  <div class="p-1">
  <div class="block p-6 w-full bg-sky border border-sky-200 rounded-lg shadow hover:bg-sky-600 dark:bg-sky-900 dark:border-sky-900 dark:hover:bg-sky-800">
  
  <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-sky-900 dark:text-white">Patient Name : {firstName +" "+lastName}</h5>
  </div>
  <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
  <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Birthdate : </b> {userpersonaldetail.birthDate}</p>
  </div>
  <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
  <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Age : </b> {userpersonaldetail.age+" yrs"}</p>
  </div>

  <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
  <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Address : </b> {userpersonaldetail.address}</p>
  </div>

  <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
  <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Height : </b> {userpersonaldetail.height+" cm"}</p>
  </div>

  <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
  <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Weight : </b> {userpersonaldetail.weight+" kg"}</p>
  </div>

  <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
  <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Medical Problem : </b> {userpersonaldetail.medicalproblem}</p>
  </div>

  <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
  <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Allergies : </b> {userpersonaldetail.allergies}</p>
  </div>

  <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
  <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Medication : </b> {userpersonaldetail.medication}</p>
  </div>

  </div>
  
  </div> 



  
  
  </div>;
}

export default Personaldetail;
