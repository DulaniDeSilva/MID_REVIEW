import React from 'react';
// import {Link} from "react-router-dom";
// import { Route } from 'react-router-dom';
// import {useLocation, useNavigate} from 'react-router-dom';
import MainNavigationBar from '../Components/MainNavigationBar';
import Testimonialcomponent from '../Components/Testimonialcomponent';
import Enrollmentregister from '../Components/Enrollmentregister';
import Featurescard from '../Components/Featurescard';
import Teamcomponent from '../Components/Teamcomponent';
import Category from '../Components/Category';
import Footer from '../Components/Footer';
// import { useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div style={{
      // backgroundImage: 'linear-gradient(##F8BDEB, #EDE4FF)',
      backgroundColor: '#EDE4FF',
      // fontFamily: 'Merriweather, serif',
      fontFamily: 'Montserrat, sans-serif',
      // fontFamily: 'Roboto, sans-serif',
      // fontFamily: 'Sacramento, cursive',
      
    }}>
       
        <MainNavigationBar/>

        <Category/>

        <Testimonialcomponent/>
        <Featurescard/>
        <Enrollmentregister/>
        <Teamcomponent/>
       <Footer/>







       <Link to="/payments" >
      <Button  className="signinsubmit">
         Payments
        </Button>
      </Link>


      <Link to="/inventory" >
      <Button  className="signinsubmit">
         Inventory
        </Button>
      </Link>
    
    </div>
  )
};

export default Home;

