import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
