import { Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import { Container } from "react-bootstrap";
import CartScreen from "../screens/CartScreen";
import SignInScreen from "../screens/SignInScreen";

function Main() {
  return (
    <main>
      <Container className="my-2">
        {/* <section className="mt-3"></section> */}
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/Signin" element={<SignInScreen />} />
        </Routes>
      </Container>
    </main>
  );
}

export default Main;
