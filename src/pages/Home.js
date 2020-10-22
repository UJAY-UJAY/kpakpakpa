import React from 'react'
import HomeContent from "./home/HomeContent"
import { NavLink } from 'react-router-dom';


function Home () {
    return(
        <div>
           <HomeContent/>

           {/* <h1>hi</h1> */}

           <div className='homepage'>

              {/* <img src={'/Pictures/000.png'}/> */}

              <NavLink to ='/signin'>
               CLICK
              </NavLink>

           </div>
            
        </div>
    )
}
export default Home