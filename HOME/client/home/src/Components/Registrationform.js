import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import logo from "../Assets/Images/logo.jpg";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';






function Registrationform() {




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

    <Form>

    
    <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label className='formheading'>Child Details </Form.Label>
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
        <ListGroup as="ol" numbered horizontal>
      <ListGroup.Item as="li">Birth Certificate</ListGroup.Item>
      <ListGroup.Item as="li">Medical Records (If Any)</ListGroup.Item>
    </ListGroup>
        </Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>





{/* parent infromation */}
     <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label  className='formheading'>Family Details </Form.Label>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label className='formheading'> Details of the Father </Form.Label>
        </Form.Group>
      </Row>

    
      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Name of Father </Form.Label>
          <Form.Control type="text" placeholder="A.F.Perera" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address (if differ from child)</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Occupation</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      </Row>

      
      <Row className="mb-3">
      <Form.Group as={Col}   className="mb-3" controlId="formGridAddress1">
        <Form.Label>Telephone Number (Home) </Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group as={Col}  className="mb-3" controlId="formGridAddress1">
        <Form.Label>Telephone Number (Work) </Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Please upload following documents 
        <ListGroup as="ol" numbered horizontal>
      <ListGroup.Item as="li">NIC</ListGroup.Item>
      <ListGroup.Item as="li">Grama Sewaka Certificate</ListGroup.Item>
      </ListGroup>
        </Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>


        {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$mothers details */}
        <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label className='formheading'>Mother Details </Form.Label>
        </Form.Group>
      </Row>

    
      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Name of Mother </Form.Label>
          <Form.Control type="text" placeholder="A.F.Perera" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address (if differ from child)</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Occupation</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      </Row>

      
      <Row className="mb-3">
      <Form.Group as={Col}   className="mb-3" controlId="formGridAddress1">
        <Form.Label>Telephone Number (Home) </Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group as={Col}  className="mb-3" controlId="formGridAddress1">
        <Form.Label>Telephone Number (Work) </Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>


        {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Gurdian information */}

        <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label className='formheading'>Guardian Details </Form.Label>
        </Form.Group>
      </Row>

    
      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Name of Guardian </Form.Label>
          <Form.Control type="text" placeholder="A.F.Perera" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address </Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      </Row>

     
      
      <Row className="mb-3">
      <Form.Group as={Col}   className="mb-3" controlId="formGridAddress1">
        <Form.Label>Telephone Number (Home) </Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group as={Col}  className="mb-3" controlId="formGridAddress1">
        <Form.Label>Telephone Number (Work) </Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>



    {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$office usage details */}

    <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Select the type of Service </Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Pre-School</option>
            <option>Child-Care</option>
            <option>After-School-Child-Care</option>
          </Form.Select>
        </Form.Group>




      <Row className="mb-3">
      <Form.Group as={Col}   className="mb-3" controlId="formGridAddress1">
        <Form.Label>Please list any allergies:  </Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      </Row>





















      





      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    </Container>
   


    {/* form closing */}

    
    
    
    
    
    
    
    
    
    
    
    
    
    {/* closing div */}
    </div>
  )
}


export default Registrationform;