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

        <div>
            <div>
                {
                    loggedIn===true
                    ?
                    <p>Thank you for signing in</p>
                    :null
                }
               <form>

                   <label> Email </label>
                   <input 
                        type= "email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} />

                   <label> Password </label>
                   <input 
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                 <div class="btn-group">
                    <div class = "center">
                      <button onClick={() => handlelogin() }>Submit</button>
                    </div>
                 </div>
               </form>
            </div>

            <br></br>

            
                
            <div class='container'> 
              
                
            </div>
            <div>
                <SignupForm/>

            </div>
                
        </div>
       
    );
}


export default signIn