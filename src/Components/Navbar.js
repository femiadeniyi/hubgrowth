import React from 'react'
import {TextInput} from "@tremor/react";
import {Search} from "heroicons-react";
export default function Navbar() {
return(
       <div className="relative w-full sm:flex justify-between item-center p-2" id="top">
         <h1 className="font-bold text-gray-300">Dashboard</h1>
           <div className="py-2">
             <TextInput icon={Search} placeholder="Search..."/>
           </div>
       </div>
	)
}