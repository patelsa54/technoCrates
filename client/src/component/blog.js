import React from "react";
import {Link, Route,Routes} from'react-router-dom';
import logo from './medi_icon.jpeg'

import img2 from './image2.jpeg';
import img3 from './image3.jpg';
import img4 from './image5.png';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';  

function blog() {
  return <div>
  <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows>  
  <div>  
      <img src={img2} />  
      <p className="legend">Legend 1</p>  
  </div>  
  <div>  
      <img src={img3} />  
      <p className="legend">Legend 2</p>  
  </div>  
  <div>  
      <img src={img4} />  
      <p className="legend">Legend 3</p>  
  </div>  
</Carousel>
      
  
  </div>;
}

export default blog;
