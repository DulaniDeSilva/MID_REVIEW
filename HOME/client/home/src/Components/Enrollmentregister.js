import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import img3 from "../Assets/Images/img3.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// component for subscribe by external users

function Enrollmentregister() {
  return (
    <div>
    {/* open div */}

    <Container className='schedulecontainer'>


      <Row>
        <Col className='scheduleimagecolumn'><img  src={img3} alt = "logo"  className='Scheduleimage'/> </Col>
        <Col> 
          <h3>Take the Next Step</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non </p>
        
          <form method='POST'>
          <input type = "email" name = "email" placeholder='Jane@gmail.com'></input><br></br>
          <Button variant="success" className='scheduleButton'>BOOK AN APPOINTMENT</Button>
          </form>
        </Col>
      </Row>


    


    
    
    
    </Container>

    



    
    

    
    {/* closing div */}
    </div>
  )
}


export default Enrollmentregister;