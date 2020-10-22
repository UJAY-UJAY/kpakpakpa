import React, {useState} from 'react';

import { useHistory } from 'react-router-dom'
import styles from './signupform.module.css';






function Form () {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [skillSet, setSkillSet] = useState('');
    const [username, setUsername] = useState('');

    function handlelogin (event) {
        event.preventDefault();
        if (email==='a' && password ==='s') {
            setloggedIn (true)
            history.push('/dashboard')
        }
    }
                        






        return(
    <div className="container">
    <form>
    <div className="row">
        <div className="col-25">
        <label for="username">UserName</label>
        </div>
        <div className="col-75">
        <input type="text" onChange={e => setUsername(e.target.value)} id="username" name="username" placeholder= "username"/>
        </div>
    </div>

    <div className="row">
        <div className="col-25">
        <label for="password">Password</label>
        </div>
        <div className="col-75">
        <input type="text" onChange={e => setPassword(e.target.value)} id="password" name="password" placeholder= "password"/>
        
        </div>
    </div>

    <div className="row">
        <div className="col-25">
        <label for="email">email</label>
        </div>
        <div className="col-75">
        <input type="text" onChange={e => setEmail(e.target.value)} id="email" name="email" placeholder="email.."/>
        
        </div>
    </div>
    <div className="row">
        <div className="col-25">
        <label for="category">Category</label>
        </div>
        <div className="col-75">
        <select id="jobcategory" name="jobcategory">
            <option value="Weekend">Weekend Job</option>
            <option value="Part-time">Pat-Time Job</option>
            <option value="Remote">Remote Job</option>
        </select>
        </div>
    </div>
    <div className="row">
        <div className="col-25">
        <label for="subject">Profile</label>
        </div>
        <div className="col-75">
        <textarea id="subject" name="subject" placeholder="Skillset.." style={{height:"200px"}}></textarea>
        </div>
    </div>
    <div className="row">
    <button onClick={ handlelogin }>Submit</button>
    </div>
    </form>
    </div>
    );
}

export default Form;