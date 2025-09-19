import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Container, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import 'react-toastify/dist/ReactToastify.css';

// npm i @emailjs/browser

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // 'service_yo6g5ym',
        import.meta.env.VITE_SERVICE_EMAILJS,
        // 'template_6qq73re',
        import.meta.env.VITE_TEMPLATE_EMAILJS,
        form.current,
        // 'z2cH9INylXX9w6xyk'
        import.meta.env.VITE_APIKEY_EMAILJS
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent succcefully');
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <Container className='small-container'>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <h1 className='my-3'>Contact Us</h1>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            required
            value={name}
            name='user_name'
            placeholder='Enter Your Name'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='Email'
            required
            name='user_email'
            value={email}
            placeholder='Enter Your Email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='text'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            required
            cols={30}
            rows={5}
            name='message'
            type='text'
            placeholder='Write Your Message'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </Form.Group>
        <div className='mb-3 d-grid'>
          <Button type='submit' value='Send Message'>
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ContactScreen;
