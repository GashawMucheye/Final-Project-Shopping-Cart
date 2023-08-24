import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// npm i @emailjs/browser

const ContactScreen = () => {
  const [name, setName] = useState();
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
          toast.success('email sent succcefully');
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
    <div className="container bg-info p-2">
      <h3 className="text-center">
        <strong>Contact Us</strong>
      </h3>
      <form ref={form} onSubmit={sendEmail} className="mx-auto">
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea
          name="message"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="submit"
          value="Send Message"
          className="border border-success bg-secondary text-white  rounded"
        />

        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactScreen;
