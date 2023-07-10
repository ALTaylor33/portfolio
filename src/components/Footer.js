import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-auto py-3 bg-light" style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <Container>
        <Row className="justify-content-center">
          <Col className="d-flex">
            <a href="https://github.com/ALTaylor33" target="_blank" rel="noopener noreferrer">
              <img src="./assets/img/GitHub-Mark.png" alt="GitHub" className="img-fluid" style={{ width: '30px', height: '30px' }} />
            </a>
            <a href="https://www.linkedin.com/in/austin-taylor-9466a7277/" target="_blank" rel="noopener noreferrer">
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/></svg>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
