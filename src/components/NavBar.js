import { Link } from "react-router-dom";

import "../stylesheets/navBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
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
