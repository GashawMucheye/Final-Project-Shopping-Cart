import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react';
import SideBar from './components/SideBar';
import { Store } from './contextApi/Store';

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { fullBox } = state;

  return (
    <Router>
      <div
        className={
          sidebarIsOpen
            ? fullBox
              ? 'site-container active-cont d-flex flex-column full-box'
              : 'site-container active-cont d-flex flex-column'
            : fullBox
            ? 'site-container d-flex flex-column full-box'
            : 'site-container d-flex flex-column'
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
