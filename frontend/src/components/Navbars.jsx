import { useContext } from 'react';
import {
  Navbar,
  Container,
  Nav,
  Badge,
  NavDropdown,
  Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Store } from '../contextApi/Store';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import SearchBox from './SearchBox';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
const Navbars = ({ brandName, setSidebarIsOpen, sidebarIsOpen }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Button variant="dark" onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
          <i className="fas fa-bars"></i>
        </Button>
        <LinkContainer to="/">
          <Navbar.Brand>
            <strong> {brandName}</strong>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <SearchBox />

          <Nav className="me-auto w-100 justify-content-end">
            <Link
              to="/about"
              className="mt-2 text-secondary text-decoration-none nav_link"
            >
              About Us
            </Link>

            <Link
              to="/ContactScreen"
              className="mt-2 text-secondary text-decoration-none nav_link"
            >
              Contact Us
            </Link>
            <Link to="/cart" className="nav-link nav_link mt-2">
              <FaShoppingCart
                className="text-warning "
                style={{ fontSize: '30px' }}
              />
              {cart.cartItems.length > 0 && (
                <Badge
                  pill
                  bg="danger"
                  style={{ position: 'relative', left: '-10px', top: '-6px' }}
                >
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
                  <FaSignOutAlt /> Signout
                </Link>
              </NavDropdown>
            ) : (
              <Link className="nav-link nav_link mt-2" to="/signin">
                <FaSignInAlt /> SignIn
              </Link>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="admin-nav-dropdown">
                <LinkContainer to="/dashboard">
                  <NavDropdown.Item>Dashboard</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/products">
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/orders">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="admin/users">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
