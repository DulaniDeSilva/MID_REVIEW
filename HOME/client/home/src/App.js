// import React, { useRef} from "react";
import './App.css';

import {Routes, Route  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Login from './Pages/Login';
// import Logincomponent from "./Components/Logincomponent";
// import SigninComponent from "./Components/SigninComponent";
// import Registrationform from './Components/Registrationform';
import RegistrationMainForm from './Pages/RegistrationMainForm';
import Parentinfo from './Components/Parentinfo';
import Guardianinfo from './Components/Guardianinfo';
import Bankinfo from './Components/Bankinfo';
import Officeinfo from './Components/Officeinfo';
// import Welcome from './Components/Welcome';
import Childinfo from './Components/Childinfo';
import Welcomepage from './Pages/Welcomepage';
import Staffregistration from './Pages/Staffregistration';
// import FreeComponent from './Components/FreeComponent';
// import AuthComponent from './Components/AuthComponent';
// import { useState} from 'react';
import Occupation from './Components/Occupation';

import Payments from  './Pages/Payments';
import Inventory from './Components/InventoryComponents/Inventory';


function App() {
  return (
    <div className="App">
       
  <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path = "/signin" element = {<Signin/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/registerMainform" element = {<RegistrationMainForm/>}/>
        <Route path = "/childinfo" element = {<Childinfo/>}/>
        <Route path = "/parentinfo" element = {<Parentinfo/>}/>
        <Route path = "/guardianinfo" element = {<Guardianinfo/>}/>
        <Route path = "/bankinfo" element = {<Bankinfo/>}/>
        <Route path = "/officeinfo" element = {<Officeinfo/>}/>
        <Route path = "/welcome" element = {<Welcomepage/>}/>
        <Route path = "/staffinfo" element = {<Staffregistration/>}/>
        <Route path='/occupation' element = {<Occupation/>}/>

        <Route path = "/payments" element = {<Payments/>}/>
        <Route path = "/inventory" element = {<Inventory/>}/>

     


  </Routes>

       
    
       
    
        
     
    {/* <MainNavigationBar/> */}
  
    {/* <Logincomponent/> */}
    {/* <Featurescard/> */}
    {/* <Testimonialcomponent/> */}
    {/* <Logincomponent/> */}
    {/* <AccessCompoent/> */}
    {/* <Enrollmentregister/> */}

  
    
  
    </div>
  )
   
}

export default App;
