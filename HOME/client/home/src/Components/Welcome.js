
import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import group from "../Assets/Images/group.png";
// import group4 from "../Assets/Images/group4.png";


export default function Welcome() {
  return (
    <div>


      <h1 style={{
        textAlign: 'center',
        padding: '30px',
        fontFamily: 'Merriweather, serif',
        position: 'relative',
        top: '30px',
      }}> 😊 Welcome To Toddler Town Pre School and Child Care Center </h1>
      

      <Container>
        <Row>
  <Col>
              
      <img className='teamlogo' src={group} alt = "logo" style={{
        textAlign: 'center',
        position: 'relative',
        left: '50px',
        border:'0px',
        padding: '0px',
        margin: '0px',
        width: '600px',
        height: '600px',

      }}/>

  </Col>



  <Col>
        <Row>
              <h5 style={{
                position: 'relative',
                top: '50px',
                fontSize: '1.2rem',
              }}>"Welcome to Toddler Town Preschool and Child Care, where love, care, and a friendly embrace await your child. We've created a secure haven for young minds to explore, learn, and grow, and we're excited to have your family as a part of our community. Together, we'll embark on a journey of discovery and nurturing, ensuring that your child's early years are filled with joy, laughter, and endless possibilities."</h5>
        </Row>
    <Row>

        <Col >
              <Link to="/" >
              <Button  className="signinsubmit" style={{
                width: '200px',
                padding: '5px',
                position: 'relative',
                left: '100px',
                top: '100px',
                marginTop: '80px',
                marginBottom: '40px',
                fontSize: '1.5rem',
              }}>
                   Home
               </Button>
              </Link>
          </Col>

          <Col>
              <Link to="/login"  >
              <Button  className="signinsubmit"  style={{
                width: '200px',
                padding: '5px',
                position: 'relative',
                top: '100px',
                left: '120px',
                marginTop: '80px',
                marginBottom: '40px',
                fontSize: '1.5rem',
              }}>
                    Login
              </Button>
                </Link>

          </Col>




              
    </Row>



    </Col>
        </Row>
      </Container>














    </div>
  )
}
