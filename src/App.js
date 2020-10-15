import React from 'react';

import NavBar from './COMPONENTS/NavBar'
import Home from './pages/Home'
import SignIn from './COMPONENTS/SignIn'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'




function newApp() {

  return (
    
    <>

     < NavBar/>
     <Router>
       <Switch>
         <Route path='/' exact>< Home/></Route>
         <Route path='/signin'>< SignIn/></Route>
         
       </Switch>
     </Router>

  
    

     
    
     


    </>

  );
}

export default newApp;
