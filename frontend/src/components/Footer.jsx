import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className=" bg-dark">
      <Container className="bg-primary">
        <div className="text-center ">
          <p className="mt-1" style={{ color: "white" }}>
            &copy;all rights reserver me
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
