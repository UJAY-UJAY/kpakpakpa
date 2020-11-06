import React, { useState } from 'react';
import styles from './signin.module.css'
import { useHistory } from 'react-router-dom';
import '../index.css';
import SignupForm from './SignupForm'



function signIn() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setloggedIn] = useState('false');

    function handlelogin (event) {
        event.preventDefault();
        if (email==='a' && password ==='s') {
            setloggedIn (true)
            history.push('/dashboard')
        }
        return;
    }
    return (

        <div className={styles.allforms}>
            <div className={styles.signin}>
                {
                    loggedIn===true
                    ?
                    <p>Thank you for signing in</p>
                    :null
                }
               <form>
                   <div className={styles.login}>
                
                   <input 
                        type= "email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} id="email" name="email" placeholder="email.."
               />

                        <br></br>
                        <br></br>
            
                  

                   
                   <input 
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} id="password" name="password" placeholder="password.."
                    />

                        <br></br>
                        <br></br>
                        
                  
                

                 <div class="btn-group">
                    <div class = "center">
                      <button onClick={() => handlelogin() }>Submit</button>
                    </div>
                 </div>
                 </div>
               </form>
            </div>

            <br></br>

            
                
            <div class='container'> 
              
                
            </div>
            <div className={styles.signup} >
                <SignupForm/>

            </div>

            <div className={styles.logo4}>
              <img className={styles.resize5} src={'/Pictures/logo4.png'}/>
           </div>
                
        </div>
       
    );
}


export default signIn