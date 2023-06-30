import { Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Navbars = ({ brandName }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="bg-info">
        <LinkContainer to="/">
          <Navbar.Brand>
            <strong> {brandName}</strong>
          </Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
};

export default Navbars;
