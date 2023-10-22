import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { faChild } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';




function Featurescard() {

   

  return (
    <div class = "featurescard">
       <Container className= "featurecontainer">
        <Row className='featurerow'>
            <Col md = {3} className='featurecolumn'>
            <FontAwesomeIcon icon = {faHeart} className='icons'></FontAwesomeIcon>
              <h3> Love</h3>
              <p>"At Toddler Town, we provide a nurturing environment where every child is cherished, ensuring they feel loved and valued."</p>
            </Col>
            <Col md = {3} className='featurecolumn'>
            <FontAwesomeIcon icon = {faShield} className='icons'></FontAwesomeIcon>
            <h3> Secure</h3>
              <p>"Your child's safety is our top priority; we maintain a secure facility with vigilant staff to provide parents with peace of mind."</p>
            </Col>
            <Col md = {3} className='featurecolumn'>
            <FontAwesomeIcon icon = {faChild} className='icons'></FontAwesomeIcon>
            <h3> Care</h3>
              <p>"Our experienced caregivers prioritize your child's well-being, offering personalized care to meet their unique needs and support their growth."</p>
            </Col>
            <Col md = {3} className='featurecolumn'>
            <FontAwesomeIcon icon = {faSmile} className='icons'></FontAwesomeIcon>
            <h3> Friendly</h3>
              <p>"We foster a warm and welcoming atmosphere, encouraging positive social interactions and the formation of meaningful friendships."</p>
            </Col>
            

        </Row>


       </Container>



    </div>
  )
}

export default Featurescard;