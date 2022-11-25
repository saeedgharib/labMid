import { useState } from "react";

function Leftbar(props) {

    
    
    
        function Delete(id){
            
    
        }
    
        
        return ( 
            <div style={{ marginLeft:"1rem",marginTop:"2rem"}}>
    <div class="card text-bg-light" style={{width:"19rem"}}>
  <div class="card-header"></div>
        {
            props.Pteams.map((team)=>

  


  <div className="card " >
        <div class="card-header" ><b>{}</b><button type="button" class="btn-close btn btn-danger" style={{}} aria-label="Close" onClick={()=>Delete(team.id)}></button></div>
  <div className="card-body">
    <h5 className="card-title">{team.team1.img}{team.team1.name}&nbsp; {team.team1.scoreDays}</h5>
    <p className="card-text">{team.team1.img}{team.team2.name}</p>
    <hr></hr>
    <br></br>
   
  </div>
</div>
    
     )   } 
      </div>
        </div>
    
                
     );
}

export default Leftbar;