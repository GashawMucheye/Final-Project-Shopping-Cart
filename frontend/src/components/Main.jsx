import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "../data";

function Main() {
  const { products } = data;
  return (
    <Row>
      {products.map((item) => (
        <Col>
          <Card className="text-center">
            <Card.Body>
              <img src={item.image} alt={item.name} className="shadow" />
              <Card.Text>{item.name}</Card.Text>
              <Card.Text>{item.price}</Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Main;
