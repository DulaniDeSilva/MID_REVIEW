import React, {useState, useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




function PaymentSection() {

  const [selectedCards, setSelectedCards] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
      const newTotalAmount = selectedCards.reduce((total, card) => {
        const price = parseFloat(card.price.replace(/[^0-9]/g, ''));
        return !isNaN(price) ? total + price:total;
      }, 0);
      setTotalAmount(newTotalAmount);
  }, [selectedCards]);

    const paymentType = [
        {
            title: "Monthly Payment",
            text: "Regular fees paid for the childs ongoing care and education",
            price: "Rs. 10 000.00"
        },
        {
            title: "Supply or Material Fees",
            text: "Charged for the supplies the child care provides ",
            price: "Rs. 5 000.00"
        },
        {
            title: "Meal Fees",
            text: "Charges for the meals and snaks provided by the child care center",
            price: "Rs. 8 000.00"
        },
        {
            title: "Early Drop Off or Extended Hours Fees",
            text: "Fees for dropping off children before the regular opening hours",
            price: "Rs. 5000.00"
        },
        {
          title: "Early Drop Off or Extended Hours Fees",
          text: "Fees for dropping off children before the regular opening hours",
          price: "Rs. 5000.00"
      },
      {
        title: "Early Drop Off or Extended Hours Fees",
        text: "Fees for dropping off children before the regular opening hours",
        price: "Rs. 5000.00"
    },
      
    ];

    const handleAddToTable = (data, description) =>{
      const updatedData = {...data, description};
      setSelectedCards([...selectedCards, updatedData]);
    };

    const handleRemoveItem = (index) =>{
      const newSelectedCards = [...selectedCards];
      newSelectedCards.splice(index, 1);
      setSelectedCards(newSelectedCards);
     
    }

    

   
  

  return (
    <div>
        

        <div className='Accordion'>

        <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Toddler Payement Section</Accordion.Header>
        <Accordion.Body>
          <div className = "maincard"> 

        {paymentType.map((data, index) => (
      <Card key={index} style={{ width: '18rem' }} className="mb-3">
        <Card.Body className = "maincardbody">
          <div className='cardheader'>
          <Button variant="primary"  onClick={() => handleAddToTable(data, "Toddler Section")}>
               +
          </Button>
          <Card.Title className='cardtitle'>{data.title}</Card.Title>
          </div>
          
          
          <Card.Text className = "cardtext">{data.text}</Card.Text>
          <Card.Text className = "cardprice">Price: {data.price}</Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    ))}

        </div>
        </Accordion.Body>
      </Accordion.Item>









      <Accordion.Item eventKey="1">
        <Accordion.Header>Preschooler Payement Section</Accordion.Header>
        <Accordion.Body>

        <div className = "maincard"> 
        {paymentType.map((data, index) => (
      <Card key={index} style={{ width: '18rem' }} className="mb-3">
        <Card.Body className = "maincardbody">
          <div className='cardheader'>
          <Button variant="primary"  onClick={() => handleAddToTable(data, "Preschool Section")}>
               +
          </Button>
          <Card.Title className='cardtitle'>{data.title}</Card.Title>
          </div>
          
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text className = "cardtext">{data.text}</Card.Text>
          <Card.Text className = "cardprice">Price: {data.price}</Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    ))}

 
</div>
        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>After Schooler Payment Section</Accordion.Header>
        <Accordion.Body>
        <div className = "maincard"> 
        {paymentType.map((data, index) => (
      <Card key={index} style={{ width: '18rem' }} className="mb-3">
        <Card.Body className = "maincardbody">
          <div className='cardheader'>
          <Button variant="primary"  onClick={() => handleAddToTable(data, "After Schooler Section")}>
               +
          </Button>
          <Card.Title className='cardtitle'>{data.title}</Card.Title>
          </div>
          
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text className = "cardtext">{data.text}</Card.Text>
          <Card.Text className = "cardprice">Price: {data.price}</Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    ))}

         
       
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Other Payements Section</Accordion.Header>
        <Accordion.Body>
        <div className = "maincard"> 
        {paymentType.map((data, index) => (
      <Card key={index} style={{ width: '18rem' }} className="mb-3">
        <Card.Body className = "maincardbody">
          <div className='cardheader'>
          <Button variant="primary"  onClick={() => handleAddToTable(data, "Other")}>
               +
          </Button>
          <Card.Title className='cardtitle'>{data.title}</Card.Title>
          </div>
          
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text className = "cardtext">{data.text}</Card.Text>
          <Card.Text className = "cardprice">Price: {data.price}</Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    ))}

    
</div>
        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>








        <div classname = "mainmodel">

          <h3 className='mainmodeltopic'> Summary Payments</h3>

            <table className='summarytable'>
            <thead>
              <tr>
                <th>Payment Type</th>
                <th>Amount (Rs:)</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              {selectedCards.map((data, index) =>(
                  <tr key = {index}>
                    <td>{data.title}</td>
                    <td>{data.price}</td>
                    <td>{data.description}</td>
                    <td>
                      <Button onClick = {() => handleRemoveItem(index)}>
                        -
                      </Button>
                    </td>
                  </tr>
              ))}

              <tr>
                <td>Total</td>
                <td> Rs: {totalAmount.toFixed(2)}</td>
                <td></td>
              </tr>
             
              </tbody>
            </table>

     

       
    

        </div>




   {/* <div className='gotopaymentbutton'>
    <Button variant = "success">Go to Payments</Button> {' '}
   </div> */}



   <Link to="/" >
      <Button  className="gotopaymentbutton signinsubmit">
         Proceed to Pay
        </Button>
      </Link>


    </div>



  )
};

export default PaymentSection;


