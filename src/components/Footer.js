import { Link } from "react-router-dom";
import "../css/Footer.css";
function Footer() {
    return ( 


<div>


<div class="footer-dark col-md-10" style={{display:"flex",justifyContent:"center",marginLeft:"8rem",border:"1px solid gray",borderRadius:"20px",marginTop:"100rem"}}>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-2 item" style={{marginLeft:"30px"}}>
                        <h3>Key Series</h3>
                        <hr></hr>
                        <ul>
                        <li><Link to="/qeaTrophy">QEA Trophy</Link></li>
                         <li><Link>Fantasy Picks</Link></li>
                        <li><Link>ICC Ranking</Link></li>
                        <li><Link>More...</Link></li>
                        <li><Link>T20 TimeOut</Link></li>
                         <li><Link>Fantasy Picks</Link></li>
                        <li><Link>ICC Ranking</Link></li>
                        <li><Link>More...</Link></li>
                        <li><Link>T20 TimeOut</Link></li>
                         <li><Link>Fantasy Picks</Link></li>
                        <li><Link>ICC Ranking</Link></li>
                        <li><Link>More...</Link></li>
                        <li><Link>T20 TimeOut</Link></li>
                         <li><Link>Fantasy Picks</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-2 item" style={{marginLeft:"30px"}}>
                        <h3>Quick Links</h3>
                        <hr></hr>
                        <ul>
                        <li><Link>T20 TimeOut</Link></li>
                         <li><Link>Fantasy Picks</Link></li>
                        <li><Link>ICC Ranking</Link></li>
                        <li><Link>More...</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-2 item" style={{marginLeft:"30px"}}>
                        <h3>ESPNcricinfo Apps</h3>
                        <hr></hr>
                        <ul>
                            <li><Link>Android App</Link></li>
                            <li><Link to="/iosApp">ios App</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-2 item" style={{marginLeft:"20px"}}>
                        <h3>Follow ESPNcricinfo</h3>
                        <hr></hr>
                        <ul>
                            <li><Link>Instagram</Link></li>
                            <li><Link>Twitter</Link></li>
                            <li><Link>Facebook</Link></li>
                            <li><Link>Youtube</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-2 item" style={{marginLeft:"10px"}}>
                        <h3>ESPN sites</h3>
                        <hr></hr>
                        <ul>
                        <li><Link>The cricket monthly</Link></li>
                        <li><Link>ESPN</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </footer>
    </div>

<div style={{backgroundColor:"gray",display:"flex",justifyContent:"space-evenly",height:"3rem",alignItems:"center"}}>
        <span>Terms of Use | Privacy policy | Feedback</span>
        <span>&#169;copyright ESPN Sports Media Ltd. A Rights Reserved</span>
</div>

</div>

     );
}

export default Footer;