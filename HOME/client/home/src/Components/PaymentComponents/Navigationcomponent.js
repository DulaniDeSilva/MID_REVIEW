import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Paymenthistory from './Paymenthistory';
import PaymentSection from './PaymentSection';

function Navigationcomponent() {
  const [activeNavItem, setActiveNavItem] = useState('/PaymentSection');

  const handleNavItemSelect = (selectedKey) => {
    setActiveNavItem(selectedKey);
  };





  return (
    <div>
    
    <Nav variant="pills" activeKey={activeNavItem} onSelect={handleNavItemSelect} className='Navigationbar'>
        <Nav.Item className='NavigationbarItem' >
          <Nav.Link eventKey="/PaymentSection" className="NavigationLink">Payments</Nav.Link>
        </Nav.Item>
        <Nav.Item className='NavigationbarItem'>
          <Nav.Link eventKey="/Paymenthistory" className='NavigationLink'>Payment History</Nav.Link>
        </Nav.Item>
      </Nav>

    {activeNavItem === '/PaymentSection' && <PaymentSection />}
    {activeNavItem === '/Paymenthistory' && <Paymenthistory />}
    </div>


   


  );
}

export default Navigationcomponent;