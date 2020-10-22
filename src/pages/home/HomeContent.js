import React from 'react'
import styles from './homecontent.module.css'



function HomeContent () {
    return (
    
        <div className={styles.home}>
            
            <div>
                <h1 className='home'>The Man Who Works More Than He Is Paid,<br></br> <span>Will Soon Be Paid More Than He Works</span> </h1>
            
                
            </div>

            <div class='container'> 
              <div class="btn-group">
                 <div class = "center">
                  <button> CLICK </button>
                  {/* <button> Need Workers?</button>
                  <button> Remote Jobs</button> */}
                 </div>
              </div>
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