import React from "react";
import Carditem from "./Carditem";
import AreaChart from "./AreaChart";
import TableComponent from "./TableComponent";
export default function LeftColumn(){
	return(
		 <div className="w-full flex flex-col justify-between py-2">
		   <div className="flex flex-col lg:flex-row gap-2 w-full">
		     <Carditem />
		     <Carditem />
		     <Carditem />
		   </div>
		   <div className="flex-auto w-full">
		        <AreaChart />
		        <TableComponent />
		   </div>
		 </div>
		)
}