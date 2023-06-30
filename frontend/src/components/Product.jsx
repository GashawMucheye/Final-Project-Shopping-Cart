import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({
  product: { slug, image, name, rating, numReviews, price },
}) => {
  return (
    <Card className="shadow">
      <Link to={`/product/${slug}`} className="text-decoration-none">
        <img
          src={image}
          alt={name}
          className="card-img-top text-decoration-none"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${slug}`} className="text-decoration-none">
          <Card.Title>{name}</Card.Title>
        </Link>
        <Rating rating={rating} numReviews={numReviews} />
        <Card.Text>${price}</Card.Text>
        <Button>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
