import { useState } from "react";
import news1 from "../images/news1.jpg";
import news2 from "../images/news2.jpg";
import engImage1 from "../images/engImage1.jpg";
import engImage2 from "../images/engImage2.jpg";

function Main() {

    const [content, setcontent] = useState(
        [
        {
            id:1,
            img1:news1,
            News:"Sri-Lanka News",
            Title1:"SLC invites ICC ACU to investigate fixing allegations made in parliament",
            description1:"MP Nalin Bandara claimed that the first SL-Pakistan Test in July had been fixed, and said the board had become a gambling den",
            img2:news2,
            Title2:"Sri Lanka recall Lakshan, Rajitha, Kumara for Afghanistan ODIs",
            description2:"Rajapaksa, initially included in the squad, requested for a break from ODI cricket",

        },
        {
            id:2,
            img1:engImage1,
            News:"England News",
            Title1:"Archer on comeback trail: 'A small day but a big day'",
            description1:"Fast bowler promises caution after injury but plans to commit to all international formats",
            img2:engImage2,
            Title2:"Key: Ahmed Test call-up was the plan all along",
            description2:"England director says original omission was to guard teenager from scrutiny",

        },
        {
          id:3,
          img1:engImage1,
          News:"England News",
          Title1:"Archer on comeback trail: 'A small day but a big day'",
          description1:"Fast bowler promises caution after injury but plans to commit to all international formats",
          img2:engImage2,
          Title2:"Key: Ahmed Test call-up was the plan all along",
          description2:"England director says original omission was to guard teenager from scrutiny",

      }

        ]
    );


    function Delete(id){
        setcontent(
            content.filter((content)=> id!==content.id)
        )

    }

    
    return ( 



        




            <div className="col-6" style={{display:"flex",marginLeft:"24rem",marginTop:"1rem", }} >
  
{
    content.map((content)=>(
        <div className="card col-5 md" >
        <div class="card-header" ><b>{content.News}</b><button type="button" class="btn-close btn btn-danger" style={{}} aria-label="Close" onClick={()=>Delete(content.id)}></button></div>
  <img  src={content.img1} className="card-img-top" alt="..."/>
  
  <div className="card-body">
    <h5 className="card-title">{content.Title1}</h5>
    <p className="card-text">{content.description1}</p>
    <hr></hr>
    <br></br>
   
  </div>
</div>
            
 ) )  }        
            
            
            </div>
     );





















}




export default Main;