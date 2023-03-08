import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import"../services.css";

function Services() {
  return (
    <div className='service'>

    <div className='service-logo'>
    <h1 >OUR SERVICES</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
    </div>
    <div className='cards'>
    <Card  className='card-body'  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://149646685.v2.pressablecdn.com/wp-content/uploads/2020/07/shutterstock_1727099176-scaled.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{color:'black'}}>Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className='card-body' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://counselingwellnesspgh.com/wp-content/uploads/2018/02/family-counseling-pittsburgh.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{color:'black'}}>Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className='card-body' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://149646685.v2.pressablecdn.com/wp-content/uploads/2020/07/shutterstock_1727099176-scaled.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{color:'black'}}>Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card  className='card-body'style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://149646685.v2.pressablecdn.com/wp-content/uploads/2020/07/shutterstock_1727099176-scaled.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" style={{color:'black'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
   

  )
}

export default Services
