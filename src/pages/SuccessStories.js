import React from 'react'
import '../index.css';
import styles from '../pages/SuccessStories.module.css'

function Success() {
    return(
        <>
         
            



          <div className={styles.success}>
            <h3>Many People like you are finding Jobs here,<br></br> You could be next</h3>

          </div>
         
          <div className={styles.stories}>
              <img className={styles.resize3} src={'/Pictures/stories2.png'}/>
          </div>
          
        </>
    )
}

export default Success;