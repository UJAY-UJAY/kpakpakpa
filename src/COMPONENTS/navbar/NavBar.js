import React from 'react';
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';

function NavBar () {

  return(
    <div className= {styles.allbar}>
      <div className={styles.navbar}>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to ='/signin'>
          Sign In
        </NavLink>

        <NavLink to ='/success'>
          Success Stories
        </NavLink>
        
      </div>
    </div>
 );
}
    

export default NavBar;