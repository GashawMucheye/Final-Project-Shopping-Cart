import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import SideBar from './components/SideBar';

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <Router>
      <div
        className={
          sidebarIsOpen
            ? 'd-flex flex-column App active-cont'
            : 'd-flex flex-column App'
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <Header setSidebarIsOpen={setSidebarIsOpen} />
        <SideBar
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />
        <Main />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
