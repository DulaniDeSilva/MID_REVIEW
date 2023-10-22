import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { useNavigate} from 'react-router-dom';
// import image_2 from './Assets/Images/image_2.jpeg ';
// import logo from "../Assets/Images/logo.jpg";
// import image_3 from "../Assets/Images/Image_3.png";
// import group from "../Assets/Images/group.png";
// import run from "../Assets/Images/run.png";
// import grass from "../Assets/Images/grass.png";
// import cat from "../Assets/Images/cat.png";
// import ball from "../Assets/Images/ball.png";
import butterfly from "../Assets/Images/butterfly.png";
// import grass2 from "../Assets/Images/grass2.png";
// import baby from "../Assets/Images/baby.png";
// import bush from "../Assets/Images/bush.png";
import group3 from "../Assets/Images/group3.png";

// home, childcare, preschool, blog, login

function MainNavigationBar() {

  const navigate = useNavigate();

  const navigateLogin = () =>{
    navigate("/login");
  };

  const navigateSignin = () =>{
    navigate("/signin");
  }

  return (
    <div className='navbarall'>

{/* Navigation bar opened */}
    <div className='navbarall'> 

      <Navbar expand="lg" className=" navbarall" >
      <Container className='navbarall'>
    
        {/* <Navbar.Brand href="#home">Toddler Town Preschool and Childcare</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

             <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Aboutus">About Us</Nav.Link>
            <Nav.Link href="/Gallery">Gallery</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link> 

            {/* <Nav.Link as={Link} to="/Logincomponent">Log in</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/SigninComponent">Sign in</Nav.Link>  */}
            {/* <Nav.Link as = {Link} to = "/login">Login</Nav.Link> */}
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Pre-School</NavDropdown.Item>
              <NavDropdown.Item href="">Child-Care</NavDropdown.Item>
              <NavDropdown.Item href="">Other</NavDropdown.Item>

             
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className='actionbutton_div'>
            <Button variant="outline-success" onClick = {navigateLogin} className='actionbutton'>SignIn</Button>
            <Button variant="outline-success" onClick = {navigateSignin} className='actionbutton'>SignUp</Button>
           
           
         
            </div>
           
        
      </Container>
     
    </Navbar>
    </div> 
    {/* navigation bar closed */}





{/* starting of the responsive gird */}


    <div className='parent'>
    {/* <img className='mainimage' src={run} alt = "logo"/> */}
    {/* <img className='mainimage' src={baby} alt = "logo"/> */}
    {/* <img className='mainimage' src={bush} alt = "logo"/> */}
    <img className='mainimg' src={group3} alt = "logo" />
    {/* <img className='mainimageball' src={ball} alt = "logo" /> */}
    <h3 > Toddler Town PreSchool and Child Care Center</h3>
     <img className='mainimagebutterfly ' src={butterfly} alt = "logo" />
     {/* <img className='grass' src={grass} alt = "logo"/> */}
      {/* <img className='cat' src={cat} alt = "logo"/> */}
      {/* <img className='grass2' src={grass2} alt = "logo"/> */}
      {/* <img className='grass2' src={grass2} alt = "logo"/> */}
      
     
    </div>
  
  
     
     
    
     
      

        {/* <img className='logoimage' src={group} alt = "logo"/> */}
        
       
        
       

























   

    {/* last closing div */}
    </div>
  )
};


export default MainNavigationBar;
