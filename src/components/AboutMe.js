import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const AboutMe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const carouselItems = [
    {
      image: './assets/img/headShot.jpg',
      text: 'I am a results-driven software engineer with a strong passion for web development and a focus on JavaScript-based technologies. With expertise in React.js Node.js, Express.js, SQL, and NoSQL databases, I have successfully built and delivered scalable web applications that will meet your business objectives.',
    },
    {
      image: './assets/img/sideStar.jpg',
      text: 'My Girlfriend Jess and I enjoy an active lifestyle. We practice acro together with friends.',
    },
    {
      image: './assets/img/deadlift.jpg',
      text: 'I\'m a competitive powerlifter. After work, you can usually find me in the gym.',
    },
    {
      image: './assets/img/greg.jpg',
      text: 'This is my bad boy, Greg. He is always getting into trouble.',
    },
    // Add more carousel items as needed
  ];

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Row>
        <Col>
          <h2 className="">About Me</h2>
          <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index}>
                <img className="d-block mx-auto" src={item.image} alt={`Image ${index}`} style={{ width: '600px', height: '800px' }} />
                <Carousel.Caption>
                  <p>{item.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;