
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CreateAccount from './Component/CreateAccount/CreateAccount';
import Hotel from './Component/Hotel/Hotel';
import ItemParent from './Component/Item/ItemParent';
import Login from './Component/Login/Login';
import Navbars from './Component/NavBar/Navbar';
import Notfound from './Component/Notfound/Notfound';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute'



export const UserContext = createContext();

function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});
  const [detectPlace,setDetectPlace] = useState("COX'S BAZAR");
 
  

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]} className='container' >
     
     
      <Router>
 
       <Navbars></Navbars>
       <Switch>
        <Route exact path="/">
        <ItemParent setDetectPlace={setDetectPlace} ></ItemParent>
        </Route>
        <Route  path="/createAccount">
       <CreateAccount></CreateAccount>
        </Route>
        <Route  path="/login">
       <Login></Login>
        </Route>
        <PrivateRoute path="/hotel">
           <Hotel detectPlace={detectPlace} ></Hotel>
          </PrivateRoute>
         
        <Route path="*">
            <Notfound></Notfound>
          </Route>
       
      </Switch> 
    </Router>


    </UserContext.Provider>
  );
}

export default App;
