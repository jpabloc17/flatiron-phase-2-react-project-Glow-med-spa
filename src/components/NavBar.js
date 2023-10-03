import { Link } from "react-router-dom";
import { useState } from "react";
import "../stylesheets/navBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <div
        className="menu"
        onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={menuOpen ? "open" : ""}
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
