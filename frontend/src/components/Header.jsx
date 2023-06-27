import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="text-success">
        <strong> amazona</strong>
      </Link>
    </header>
  );
};

export default Header;
