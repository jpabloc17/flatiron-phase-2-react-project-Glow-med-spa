import NavBar from "./NavBar";
import "../stylesheets/header.css";
import logo from "../media/RELUXE-LOGO.png";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <NavBar />
    </div>
  );
}

export default Header;
