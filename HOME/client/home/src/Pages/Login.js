import React from 'react';
import Logincomponent from '../Components/Logincomponent';
import purple2 from '../Assets/Images/purple2.jpg';
// import unicorn from '../Assets/Images/unicorn_result.png';


export default function Login() {
 
  return (
    <div style={{
        backgroundImage: `url(${purple2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '110vh',
      }}>

        <Logincomponent/>
        
    </div>
  )
}
