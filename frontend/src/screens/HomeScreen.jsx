import { Link } from "react-router-dom";
import data from "../data";

const HomeScreen = () => {
  const { products } = data;

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((item) => (
          <div className="product" key={item.slug}>
            <Link to={`/product/${item.slug}`}>
              <img src={item.image} alt={item.name} className="shadow" />
            </Link>
            <div className="product-info">
              <Link to={`/product/${item.slug}`}>
                <p>{item.name}</p>
              </Link>
              <b>
                <p>${item.price}</p>
              </b>
              <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
