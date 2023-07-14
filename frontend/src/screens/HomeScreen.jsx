import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";
import PaginationIt from "../components/Pagination";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL": {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};

const HomeScreen = () => {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });
  const [currentPage, setCurrnentPage] = useState(1);
  const [postsPerPage] = useState(4);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);
  //get current posts
  const indexOfLastPosts = currentPage * postsPerPage; //giveme10.
  const indexOfFirstPost = indexOfLastPosts - postsPerPage; //give me 0.
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPosts); //give me(0,10)

  const paginate = (pageNumber) => {
    setCurrnentPage(pageNumber);
  };
  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <div className="background-image"></div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <Loading />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {currentPosts.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product} />
              </Col>
            ))}
            <PaginationIt
              className="bg-info"
              postsPerPage={postsPerPage}
              totalPosts={products.length}
              paginate={paginate}
            />
          </Row>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
