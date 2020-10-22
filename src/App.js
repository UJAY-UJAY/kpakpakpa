import React from 'react';
import NavBar from './components/navbar/NavBar'
import Home from './pages/Home'
import Success from './pages/SuccessStories'
import SignIn from './components/SignIn'
import Dashboard from './pages/Dashboard'
import { Route, Switch} from 'react-router-dom'


function App() {

  return (
    <>
     < NavBar/>

       <Switch>
         <Route exact path='/'>< Home/></Route>
         <Route path='/signin'>< SignIn/></Route>  
         <Route path='/success'><Success/></Route>
         <Route path='/dashboard'><Dashboard/></Route>
      </Switch>
    </>
  );
}

export default App;
