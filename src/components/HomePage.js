import Footer from "./Footer";
import Main from "./Main";
import Menu from "./Menu";
import Leftbar from "./Leftbar";
import Teams from "./Teams";



function HomePage() {
      
    
    
    
    
    
    
    return ( 
        <div style={{backgroundColor:"#f9f9fb"}}>
            <div className="Nav">
                    <Menu/> 
                    
            </div>
            <span className="Left">
                <Teams/>
            </span>
            <span className="Middle">
                <Main/>
                
            </span>
            <div className="right">
               {/* <Teams/> */}
            </div>

            <div className="foot">
                <Footer/>

            </div>
        </div>

     );
}

export default HomePage;