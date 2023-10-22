import React from 'react'
import logo from "../../Assets/Images/logo.jpg";

function Headingsection() {
  return (
    <div>
        <div>
          <div className='header-container'>
          <img className='logoimage' src={logo} alt = "logo"/>
          <h1 className = "mainheader"> Toddler Town Preschool and Child Care Center</h1>
          </div>
           
           
            <h1 className = "subheader"> Toddler Town Payments</h1>

            {/* <h3 className='logger'> You are paying as: </h3> */}
        </div>
        
       
        
        
    </div>
  )
}

export default Headingsection;
