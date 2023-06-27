import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/product/:slug" element={<ProductScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </main>
  );
}

export default Main;
