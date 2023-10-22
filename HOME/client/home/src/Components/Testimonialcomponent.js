import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Assets/Images/img2.jpg";
import img2 from "../Assets/Images/img3.jpg";
import img3 from "../Assets/Images/img3.jpg";

function Testimonialcomponent() {
  return (

    <div className='carousel'>
        <Carousel>
            <Carousel.Item interval={5000}>
                 <img  src={img1} alt = "logo" className='carouselimage'/>
                <Carousel.Caption>
                    <h3>There are many variations of passages of Lorem Ipsum available </h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                 <img  src={img2} alt = "logo" className='carouselimage'/>
                <Carousel.Caption>
                    <h3>There are many variations of passages of Lorem Ipsum available </h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item interval={5000}>
                 <img  src={img3} alt = "logo" className='carouselimage'/>
                <Carousel.Caption>
                    <h3>There are many variations of passages of Lorem Ipsum available </h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
        
        
    </div>
  )
};

export default Testimonialcomponent;


// poppins
