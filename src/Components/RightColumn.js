import React from "react"
import SalesItem from "./SalesItem";
import WebAnaylist from "./WebAnaylist";
import ScoreList from "./ScoreList"
export default function RightColumn(){
	return(
		<div className="w-full p-2">
		    <SalesItem/>
		    <WebAnaylist/>
		    <ScoreList/>
		</div>
		)
}