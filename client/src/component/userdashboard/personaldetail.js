import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Fillpersonaldetail from './fillpersonaldata';

function Personaldetail() {
    const[userpersonaldetail, setUserPersonalDetail]=useState(null);
    const aadharNo=localStorage.getItem("aadharNo");
   const phoneNo=localStorage.getItem("phoneNo");
    React.useEffect(() => {
        axios.get('http://localhost:5000/api/personaldetail', {
        params: {
          aadharNo: aadharNo,
          phoneNo:phoneNo
        }
      })
      .then(res => {
        console.log("res data "+res.data);
        // let projectdata={
          
        // }
        // setProjects(projectdata);
        // setPercent(progressPercent);
      })
      .catch(function (error) {
          console.log(error);
      })
      }, []);

      if (!userpersonaldetail) return <div> <Fillpersonaldetail/></div>;
    
  return <div>personaldetail</div>;
}

export default Personaldetail;
