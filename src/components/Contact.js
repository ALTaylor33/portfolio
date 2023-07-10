import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log(formData);
    window.location.href="mailto:ALTaylor33@yahoo.com?subject=Hi&body="+formData.message;
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <Form onSubmit={handleSubmit} className='text-center container w-25'>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text"
             name="name"
            value={name}
            onChange={handleChange}
            />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
        <Form.Label>message</Form.Label>
        <Form.Control 
            name="message"
            value={message}
            onChange={handleChange}
            required as="textarea" rows={3} />
      </Form.Group>
      <Form.Group>
      <Form.Control type="submit"        
            value={"submit"}
           />
      </Form.Group>

    </Form>
  );
  }
export default Contact;