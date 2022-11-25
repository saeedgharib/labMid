import { useState } from "react";
import Leftbar from "./Leftbar";
import RightSidebar from "./Leftbar";

import {FaFlagUsa} from "react-icons/fa";
function Teams() {



    const[teams , setTeams] = useState([
        {id:1 , 
        team1 :{ message:"stumps",img:<i><FaFlagUsa/></i>,name:"England",description:"Day-2 Eng Lions trial by 89 runs",scoreDays:"501/7d"} ,
        team2 :{ name :"England Lions" , scoreDays:"501/7d", overs:30} } , 
       
        {id:2 , team1 :{ message:"INNINGS STREAK",name :"India" , scoreDays:"501/7d", description:"Day-2 Eng Lions trial by 89 runs"} ,
        team2 :{ name :"Newzeland" , scoreDays:"501/7d" , overs:''} } , 
        
    ]) 
    

    return ( 
        <div>
            <Leftbar Pteams={teams} Pstate={setTeams} />
        </div>
     );
}

export default Teams;