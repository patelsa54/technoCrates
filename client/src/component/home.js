import React from 'react';
import Navbar from './navbar'


import {BrowserRouter,Link,Outlet,Route,Routes} from'react-router-dom'

//import 'react-toastify/dist/ReactToastify.css';
//import IndividualIntervalsExample from '../Carousel/IndividualIntervalsExample';


const Home=()=>{
    
    return(
    <div className='container mx-auto p-1'>
        
       
        <Navbar/>
       
        <Outlet/>
    
    </div>
    )
}
export default Home;