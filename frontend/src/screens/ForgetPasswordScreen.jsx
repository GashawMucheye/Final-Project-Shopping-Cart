import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from '../contextApi/Store';
import { Axios } from 'axios';
import { getError } from '../utils';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { Form, Button, Container } from 'react-bootstrap';
import { HiOutlineMail } from 'react-icons/hi';

const ForgetPasswordScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const { state } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/forget-password', {
        email,
      });
      toast.success(data.message);
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);
  return (
    <Container className="small-container">
      <Helmet>
        <title>Forget Password</title>
      </Helmet>
      <h1 className="my-3">Forget Password</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>
            <HiOutlineMail />
            Email
          </Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <div className="mb-3">
          <Button type="submit">submit</Button>
        </div>
      </Form>
    </Container>
  );
};

export default ForgetPasswordScreen;
