import React from "react";
import {Link, Route,Routes} from'react-router-dom';

import logo from './medi_icon.jpeg'

function navbar() {
  return <div>
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <img src={logo} class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"></img>
            <span class="font-semibold text-xl tracking-tight">Medi Consult</span>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
            <a href="/blog" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                blog
            </a>
            <Link to="/login" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                login
            </Link>
            <Link to="/register" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                register
            </Link>
            </div>
        </div>
        </nav>
  
  </div>;
}

export default navbar;
