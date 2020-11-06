import React from 'react'
import HomeContent from "./home/HomeContent"
import { NavLink } from 'react-router-dom';
import styles from './home/home.module.css'



function Home () {
    return(
        <div>
           <HomeContent/>

          

           <div className={styles.back}>
              <img className={styles.resize6} src={'/Pictures/back2.png'}/>
           </div>

           {/* <h1>hi</h1> */}

           <div className='homepage'>

              <div className={styles.logo}>
                <img className={styles.resize} src={'/Pictures/positiveman.png'}/>
              </div>

              <div className={styles.logo2}>
                <img className={styles.resize2} src={'/Pictures/photographer.png'}/>
              </div>

              <NavLink to ='/signin'>
               <button className={styles.button}>
               <center className={styles.click}><h5>CLICK</h5></center>
               </button>
              </NavLink>

           </div>
            
        </div>
    )
}
export default Home