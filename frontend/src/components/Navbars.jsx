import { useContext } from "react";
import { Navbar, Container, Nav, Badge, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Store } from "../contextApi/Store";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbars = ({ brandName }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="bg-info">
        <LinkContainer to="/">
          <Navbar.Brand>
            <strong> {brandName}</strong>
          </Navbar.Brand>
        </LinkContainer>
        {/* <Link to="/About">About</Link> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-end">
            <Link to="/cart" className="nav-link">
              <FaShoppingCart className="text-warning" />
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>User Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/orderhistory">
                  <NavDropdown.Item>Order History</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <Link
                  className="dropdown-item"
                  to="#Signout"
                  onClick={signoutHandler}
                >
                  Signout
                </Link>
              </NavDropdown>
            ) : (
              <Link className="nav-link" to="/signin">
                SignIn
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
