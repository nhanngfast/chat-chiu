import "./Header.css";
import logo from "../../assets/images/homepage-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <img src={logo} alt="home-logo" />
      <nav>
        Header nè
      </nav>
    </>
  );
};

export default Header;
