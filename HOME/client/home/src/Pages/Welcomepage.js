import React from 'react';
import Welcome from '../Components/Welcome';
import purple from '../Assets/Images/purple.jpg';


export default function Welcomepage() {
 
  return (
    <div style={{
        backgroundImage: `url(${purple})`,
        // backgroundColor: '#F8BDEB',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '110vh',
      }}>

        <Welcome/>
        {/* <img  src={purple} alt = "logo" className='carouselimage'/> */}
                
        
    </div>
  )
}
