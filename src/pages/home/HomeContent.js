import React from 'react'
import styles from './homecontent.module.css'



function HomeContent () {
    return (
    
        <div className={styles.home}>

           

              <br></br>
              <br></br>
              <br></br>
            
            <div className={styles.quote}>
                <h3 className='home'>"The Man Who Works More Than He Is Paid,<br></br> <span>Will Soon Be Paid More Than He Works" 
                    <br></br> <h6>Napoleon Hill</h6></span> </h3>

            
                
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div  className={styles.hussle}>
                <h4>
                    FIND A SIDE-HUSSLE AND MAKE MORE MONEY
                </h4>
            </div>

            <div>
                <h5>
                    YOUR KIND OF JOB IS JUST A CLICK AWAY
                </h5>
            </div>
            

            <div>

                <h4>
                 Part-Time  .  Weekend  . Contract
                </h4>
            </div>

           
           {/* <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
             <h4 className="navbar-brand col-md-3 col-lg-2 mr-0 px-7 mr-2" >KpaKpaKpa</h4>
             <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
             </button>
           </nav> */}




         
        </div>

    )
}

export default HomeContent