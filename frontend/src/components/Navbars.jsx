import { useContext } from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Store } from "../contextApi/Store";
import { Link } from "react-router-dom";
const Navbars = ({ brandName }) => {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="bg-info">
        <LinkContainer to="/">
          <Navbar.Brand>
            <strong> {brandName}</strong>
          </Navbar.Brand>
        </LinkContainer>
        <Nav>
          <Link to="/cart" className="nav-link">
            Cart
            {cart.cartItems.length > 0 && (
              <Badge pill bg="danger">
                {cart.cartItems.length}
              </Badge>
            )}
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
