import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from "../Assets/Images/img1.jpg";
import img4 from "../Assets/Images/img4.jpg";
import img5 from "../Assets/Images/img5.jpg";



// import img1 from "../Assets/Images/img1.jpeg";

function Category() {
  return (
    <div className='categorydiv'>
      <Container>
          <Row>
            <Col className='categorycol-01' md = {3}>
            
              <Row><img  src={img1} alt = "logo" className='categoryimg'/> </Row>
              <Row> <h1> PreSchool</h1></Row>
            </Col>
            <Col className='categorycol-02' md = {3}>
           
              <Row><img  src={img4} alt = "logo" className='categoryimg'/> </Row>
              <Row><h1> Toddler Care</h1></Row>
            </Col>
            <Col className='categorycol-03' md = {3}>
            
              <Row><img  src={img5} alt = "logo" className='categoryimg'/> </Row>
              <Row><h1> After School</h1></Row>
            </Col>
          </Row>

      </Container>


    </div>

  );
};


export default Category;