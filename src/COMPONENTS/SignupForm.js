import React, {useState} from 'react';
import axios from 'axios'

import { useHistory } from 'react-router-dom'
// import styles from './signupform.module.css';






function Form () {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [skillSet, setSkillSet] = useState('');
    const [username, setUsername] = useState('');

    



const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:7198/api/user/new', {username,password,email,skillSet})
      .then(res => {
          if (res.data) {
              history.push('/dashboard')
          } else {
              alert('username or password invalid')
          }
      })

}

        return(
    <div className="container">
    <form>
    <div className="row">
        <div className="col-25">
        {/* <label for="username">UserName</label> */}
        </div>
        <div className="col-75">
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} id="username" name="username" placeholder= "username"/>
        </div>
    </div>
     
    
    <div className="row">
        <div className="col-25">
        {/* <label for="password">Password</label> */}
        </div>
        <div className="col-75">
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} id="password" name="password" placeholder= "password"/>
        
        </div>
    </div>

    <div className="row">
        <div className="col-25">
        {/* <label for="email">email</label> */}
        </div>
        <div className="col-75">
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} id="email" name="email" placeholder="email.."/>
        
        </div>
    </div>
    <div className="row">
        <div className="col-25">
        {/* <label for="category">Category</label> */}
        </div>
        <div className="col-75">
        <select id="jobcategory" name="jobcategory">
            <option value="Weekend">Weekend Job</option>
            <option value="Part-time">Pat-Time Job</option>
            <option value="Remote">Remote Job</option>
        </select>
        </div>
    </div>

    <br></br>

    <div className="row">
        <div className="col-25">
        {/* <label for="subject">Profile</label> */}
        </div>
        <div className="col-75">
        <textarea id="subject" value={skillSet} onChange={e => setSkillSet(e.target.value)} name="subject" placeholder="Skillset.." style={{height:"200px"}}></textarea>
        </div>
    </div>
    <div className="row">
    <button onClick={e => handleSubmit(e) }>Submit</button>
    </div>
    </form>
    </div>
    );
}

export default Form;