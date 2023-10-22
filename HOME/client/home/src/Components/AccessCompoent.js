import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';


// parent , teacher and admin
function AccessCompoent() {
  return (
    <div>
        <Container>
            <Row>
                <input type = "text" name = "username" placeholder='Username or email'></input>
            </Row>
            <Row>
                <input type = "password" name = "password" placeholder = "Password"></input>
            </Row>
            <Row>
                <input type = "checkbox" name='checkbox'></input>
                <p> Forgot Password</p>
            </Row>
            <Row>
            <Button variant="success" className='mainloginButton'>Parent Login</Button>
            </Row>

            <ProgressBar animated now={100} variant='success' className='mainloginprogressbar' />;
        </Container>
    </div>
  )
};

export default AccessCompoent;