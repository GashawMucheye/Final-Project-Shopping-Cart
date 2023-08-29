import Navbars from './Navbars';
const Header = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  return (
    <header>
      <Navbars
        brandName="Senays"
        setSidebarIsOpen={setSidebarIsOpen}
        sidebarIsOpen={sidebarIsOpen}
      />
      <div className="background-image"></div>
    </header>
  );
};

export default Header;
