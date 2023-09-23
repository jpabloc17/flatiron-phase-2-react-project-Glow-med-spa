import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import "../stylesheets/header.css";

function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">P&M Spa</Link>
      </h1>
      <NavBar />
    </div>
  );
}

export default Header;
