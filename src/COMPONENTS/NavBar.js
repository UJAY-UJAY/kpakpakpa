import React from 'react';
import './NavBar.css'
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'

    function NavBar () {
        return(
    
   <div className= 'allbar'>
    
    <div class="navbar">
      <Router>
      <NavLink to='/'>
        <li>Home</li>
    </NavLink>
    </Router>
      
      <a href="#news">Find a Job Here</a>
      <div class="dropdown">
      <button class="dropbtn">Categories
       <i class="fa fa-caret-down"></i>
      </button>
     <div class="dropdown-content">
      <a href="#">Part-Time</a>
      <a href="#">Weekend</a>
      <a href="#">Contract</a>
     </div>
     </div>
    </div>

    <div className='SignIn'>
      <Router>
         <NavLink to ='/signin'>Sign In</NavLink>
     </Router>
    </div>

    </div>
 );
}
    

export default NavBar;