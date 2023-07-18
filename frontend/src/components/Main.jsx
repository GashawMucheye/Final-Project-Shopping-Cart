import { Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import { Container } from "react-bootstrap";
import CartScreen from "../screens/CartScreen";
import SignInScreen from "../screens/SignInScreen";
import ShippingAddressScreen from "../screens/ShippingAddressScreen";
import SignupScreen from "../screens/SignupScreen";
import PaymentMethodScreen from "../screens/PaymentMethodScreen";
import PlaceOrderScreen from "../screens/PlaceOrderScreen";
import OrderScreen from "../screens/OrderScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import ProfileScreen from "../screens/ProfileScreen";

function Main() {
  return (
    <main>
      <Container className="my-2">
        {/* <section className="mt-3"></section> */}
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} />
          {/* <Route path="/!#" element={<PaginationIt />} /> */}
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/Signin" element={<SignInScreen />} />
          <Route path="/Signup" element={<SignupScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/shipping" element={<ShippingAddressScreen />} />
          <Route path="/payment" element={<PaymentMethodScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/order/:id" element={<OrderScreen />} />
          <Route path="/orderhistory" element={<OrderHistoryScreen />} />
        </Routes>
      </Container>
    </main>
  );
}

export default Main;
