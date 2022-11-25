

import React from 'react'
import { Link } from 'react-router-dom';
import "../css/Menu.css";
import { FaBell,  FaMoon, FaSearch} from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
function Menu() {

  
   
   
    return (

      <div className='all'>

      <nav class="navbar navbar-expand-md ">
      <img src="https://wassets.hscicdn.com/static/images/logo.png" alt="ESPNcricinfo" class="logo" width="138" style={{marginLeft:"150px"}}/>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav" style={{marginLeft:"30px"}}>
              
              <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}> Live Scores </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>/<Link to="/">Link1</Link></li>
                      <li>/<Link to="/">Link1</Link></li>
                      
                  </ul>
              </li>
              <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}> Series </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>/<Link to="/">Link1</Link></li>
                      <li>/<Link to="/">Link1</Link></li>
                      
                  </ul>
              </li>
              <li class="nav-item dropdown">
                  <Link to="/" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}> 
                  News </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>/<Link to="/">Link1</Link></li>
                      <li>/<Link to="/">Link1</Link></li>
                      
                  </ul>
              </li>
              <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}> Features </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>/<Link to="/">Link1</Link></li>
                      <li>/<Link to="/">Link1</Link></li>
                      
                  </ul>
              </li>
              <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}> Teams </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li>/<Link to="/">Link1</Link></li>
                      <li>/<Link to="/">Link1</Link></li>
                      
                  </ul>
              </li>
              <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}> videos</Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>/<Link to="/">Link1</Link></li>
                      <li>/<Link to="/">Link1</Link></li>
                      
                  </ul>
              </li>
              <li class="nav-item dropdown">
                  <Link  class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}> stats </Link>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>/<Link to="/">Link1</Link></li>
                      <li>/<Link to="/">Link1</Link></li>
                      
                  </ul>
              </li>
          </ul>
      </div>
      <ul class="navbar-nav" style={{marginLeft:"200px",}}>
      <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white"}}> Edition PK</Link><ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>/<Link to="/">Link1</Link></li>
                      <li>/<Link to="/">Link1</Link></li>
                      
                  </ul></li></ul>
      <Link style={{color:"white", padding:"0.3rem 0.5rem"}}><FaMoon/></Link>
      <Link style={{color:"white", padding:"0.3rem 0.5rem"}}><FaBell/></Link>
      <Link style={{color:"white", padding:"0.3rem 0.5rem"}}><BsFillGrid3X3GapFill/></Link>
      <Link style={{color:"white", padding:"0.3rem 0.5rem"}}><FaSearch/></Link>
  </nav>
      </div>

     );
}

export default Menu;





