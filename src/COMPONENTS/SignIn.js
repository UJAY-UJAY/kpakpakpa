import React, { useState } from 'react';

function signIn() {

    const [email, setEmail] = useState('EugeneAppertey@gmail.com');
    const [password, setPassword] = useState('');
    const [loggedIn, setloggedIn] = useState('false');

    function handleInput(event) {
        console.log(event.target.value)
    
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value)
    }

    function handlelogin (event) {
        event.preventDefault();
        if (email==='eugeneappertey@gmail.com' && password ==='piloloo') {
            setloggedIn (true)
        }
    }
    return (

        <div>

            {/* <form>
                <label for="fname">First name:</label><br></br>
                <input type="text" id="fname" name="fname"></input><br></br>
                <label for="lname">Last name:</label><br></br>
                <input type="text" id="lname" name="lname"></input><br></br>
                <input type="submit" value="Submit"></input> <input></input>
            </form> */}


            <div>
                {
                    loggedIn===true
                    ?
                    <p>Thank you for signing in</p>
                    :null
                }
               <form>

                   <label> Email </label>
                   <input type= "text" value={email} onChange={handleInput} />

                   <label> Password </label>
                   <input type='password'/>
               </form>
            </div>
                
        </div>
       
    );
}


export default signIn