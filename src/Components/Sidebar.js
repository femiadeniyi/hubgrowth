import React from 'react'
import {AiOutlineHome} from "react-icons/ai";
import {ChartBar} from "heroicons-react";
import {DocumentSearch} from "heroicons-react";
import {Mail} from "heroicons-react";
import {CreditCard} from "heroicons-react";
import {Bell} from "heroicons-react";
import {ArrowUp} from "heroicons-react";
import {ExternalLink} from "heroicons-react"
export default function sidebar() {
	return(
         <div className="bg-slate-800 flex-none w-14 sm:w-20 h-screen">
           <div className="h-20 items-center flex"> 
             <AiOutlineHome className="text-gray-300 left-3 sm:left-6 fixed" size={50}/>
           </div>
           <div className="fixed left-3 sm:left-6 top-[100px]">
             <ChartBar className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" size={40}/>
              <DocumentSearch className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" size={40}/>
              <Mail className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" size={40}/>
               <CreditCard className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" size={40}/>
               <Bell className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300" size={40}/>
           </div>
           <div className="fixed bottom-4 left-3 sm:left-6">
           <a href="#top">
             <ArrowUp
             size={40}
             className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"/></a>
             <ExternalLink
             size={40}
             className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"/>
           </div>
         </div>

		)
}
