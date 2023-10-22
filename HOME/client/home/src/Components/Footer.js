import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from "../Assets/Images/logo.jpg";
import Image from 'react-bootstrap/Image';


function Footer() {
  return (
    <div className="footer">
      <Container className="footer_section_padding">
        <Row>
          <Col md={2}>
            <Row>
              <Image className='footer_logoimage' src={logo} alt="logo" roundedCircle />
              
            </Row>
            <Row>
              <p>dcsfvergrwgvj nvvnxcvnksjrl frggryhyhrgrgg ivncvjnnffvcjvv rejendjvnjv fdfljnvlmnvlvjsfvxv j</p>
            </Row>
          </Col>

          <Col md={3} className='footer_links'>
            <h4>About Us </h4>
            <a href="/Who_We_are_Link"><p>Who We Are</p></a>
            <a href="/Curriculum_link"><p>Our Curriculum</p></a>
          </Col>


          <Col md={3} className='footer_links'>
            <h4>sdwwdddfd</h4>
            <a href="/Link"><p>Adscdt</p></a>
            <a href="/Link"><p>Pdcdmdress</p></a>
            <a href="/Link"><p>Cadcreer</p></a>
            <a href="/Link"><p>Contact</p></a>
          </Col>

          <Col md={3} className='footer_links'>
            <h4>Touch With Us</h4>
            <div className="socialmedia">
              <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="footer_below">
        <Row>
          <Col md={6}>
            <div className="footer_copyright">
              <p>@{new Date().getFullYear()} TODDLER TOWN. All right reserved.</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="footer_below_links">
              <a href="/terms"><div><p>Terms & Conditions</p></div></a>
              <a href="/privacy"><div><p>Privacy</p></div></a>
              <a href="/security"><div><p>Security</p></div></a>
              <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;