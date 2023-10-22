import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import logo from "../Assets/Images/logo.jpg";
import {Link } from 'react-router-dom';

function Childinfo() {


  return (
    // opening div
    <div>

    {/* top header */}
<Container className='header'>
      <Row className='headerRow' xs={12} md={8}>
        <Col className='headerCol' xs = {4}>  <img className='headerlogo' src={logo} alt = "logo"/></Col>
        <Col className='headerCol' xs = {8}>
        <Row className='headerSubRow'> <h1>REGISTRATION FORM </h1></Row>
        <Row className='headerSubRow'> <h4>Toddler Town Pre School and Childcare center </h4> </Row>
        </Col>
      </Row>
    </Container>    




    {/* form */}
    <Container className='formcontainer'>

    <Form className='mainform'>

    
    <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label className='formheading'>1. Child Details </Form.Label>
        </Form.Group>
      </Row>


    <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Name with initials: </Form.Label>
          <Form.Control type="text" placeholder="A.F.Perera" />
        </Form.Group>
      </Row>


    <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Famila" />
        </Form.Group>

        <Form.Group as={Col} controlId="">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Perera" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Birth Day</Form.Label>
          <Form.Control type="date"  />
        </Form.Group>

        <Form.Group as={Col} controlId="" >
          <Form.Label>Gender:</Form.Label>
          <Form.Check type="checkbox" label="Male" />
          <Form.Check type="checkbox" label="Female" />
        </Form.Group>
      </Row>



      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
        <Form.Control placeholder="1234 Main St" />
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>



   
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Please upload following documents
        <ListGroup  horizontal>
      <ListGroup.Item as="li">Birth Certificate</ListGroup.Item>
      <ListGroup.Item as="li">Medical Records (If Any)</ListGroup.Item>
      <ListGroup.Item as="li">Photograph of the Child (Passport Size)</ListGroup.Item>
    </ListGroup>
        </Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>


      {/* <Button variant="primary" type="submit">
        Next Page
        <Link to = "/parentinfo"> Register</Link>
      </Button>

      <Button variant="primary" type="submit">
       Go Back
        <Link to = "/Signin"> Register</Link>
      </Button> */}


      <div className='buttoncontainer'>
      <Link to="/Signin" >
      <Button  className="signinsubmit back">
         Back
        </Button>
      </Link>

      <Link to="/parentinfo" >
      <Button  className="signinsubmit front">
         Next Page
        </Button>
      </Link>
      </div>
     



    </Form>


    </Container>
   


    {/* form closing */}

    
    
    
    
    
    
    
    
    
    
    
    
    
    {/* closing div */}
    </div>
  )
}


export default Childinfo;