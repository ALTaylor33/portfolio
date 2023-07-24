import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Resume = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '../../public/assets/img/Resume.pdf';
    downloadLink.download = 'AustinTaylorResume.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Container>
      <Row className="py-5">
        <Col md={6} className="d-flex flex-column">
          <div>
            <h2>Austin Taylor</h2>
            <p>Full-Stack Developer</p>
            <p>
              Email: ALTaylor33@yahoo.com
            </p>
            <h3>Experience</h3>
          <p>Company Name, Position, Date</p>
          <p>Job description and responsibilities.</p>
          </div>
          <div className="mt-auto">
            <Button variant="primary" onClick={handleDownload}>
              Download Resume
            </Button>
          </div>
        </Col>
        <Col md={6}>
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>NoSQL</li>
            <li>SQL</li>
          </ul>
          <h3>Education</h3>
          <p>Ohio State University, Certificate, July 2023</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;