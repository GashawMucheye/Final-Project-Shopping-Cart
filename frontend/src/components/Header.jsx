import Navbars from "./Navbars";
const Header = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  return (
    <header>
      <Navbars
        brandName="Senays"
        setSidebarIsOpen={setSidebarIsOpen}
        sidebarIsOpen={sidebarIsOpen}
      />
    </header>
  );
};

export default Header;
