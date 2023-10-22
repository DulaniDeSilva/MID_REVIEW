import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Paymentcard() {

    const paymentType = [
        {
            title: "Annual Payment",
            text: "This is annual payment per an individual inthe toddler care in the section of preschoolers",
            price: "Rs. 50 000.00"
        },
        {
            title: "Annual Payment",
            text: "This is annual payment per an individual inthe toddler care in the section of preschoolers",
            price: "Rs. 50 000.00"
        },
        {
            title: "Annual Payment",
            text: "This is annual payment per an individual inthe toddler care in the section of preschoolers",
            price: "Rs. 50 000.00"
        },
        {
            title: "Annual Payment",
            text: "This is annual payment per an individual inthe toddler care in the section of preschoolers",
            price: "Rs. 50 000.00"
        },
       

    ];


  return (
  
    <div>
    {paymentType.map((data, index) => (
      <Card key={index} style={{ width: '18rem' }} className="mb-3">
        <Card.Body>
          <input type = "checkbox"></input>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.text}</Card.Text>
          <Card.Text>Price: {data.price}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    ))}



<div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>


  </div>
  );
}



export default Paymentcard;
