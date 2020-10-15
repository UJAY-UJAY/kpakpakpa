import React from 'react'
import './css/HomeContent.css';

function HomeContent () {
    return (
    
        <div>
            <div className='quotebody'>
                <h1 className='quote'>QUOTE</h1>
                <p className='content'> HelloWorld</p>
            </div>
            <div class='container'> 
              <div class="btn-group">
                 <div class = "center">
                  <button>Need A Job?</button>
                  <button>Need Workers?</button>
                  <button>Student Jobs</button>
                 </div>
              </div>
           </div>
         
        </div>

    )
}

export default HomeContent