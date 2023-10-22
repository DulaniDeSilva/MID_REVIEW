import React from 'react';
import SigninComponent from '../Components/SigninComponent';
import purple from '../Assets/Images/purple.jpg';
// import unicorn from '../Assets/Images/unicorn_result.png';


export default function Signin() {
 
  return (
    <div style={{
        backgroundImage: `url(${purple})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '110vh',
      }}>

        <SigninComponent/>
        {/* <img  src={purple} alt = "logo" className='carouselimage'/> */}
                
        
    </div>
  )
}
