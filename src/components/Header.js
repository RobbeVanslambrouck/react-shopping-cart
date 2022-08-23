import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">some shop</Link>
      </h1>

      <nav>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/shop">shop</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
