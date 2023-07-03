import { Helmet } from "react-helmet-async";

import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const SignInScreen = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            <HiOutlineMail />
            Email
          </Form.Label>
          <Form.Control type="email" required placeholder="Enter Your Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            <RiLockPasswordFill />
            Password
          </Form.Label>
          <Form.Control
            type="password"
            required
            placeholder="Enter Your Password"
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New customer?
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
};

export default SignInScreen;
