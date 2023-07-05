import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column App">
        <ToastContainer position="bottom-center" limit={1} />
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
