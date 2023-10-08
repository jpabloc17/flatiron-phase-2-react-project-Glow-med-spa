import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import "../stylesheets/header.css";
import logo from "../media/Glow (2).png";

function Header() {
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setY(window.scrollY);
    });
  }, []);

  return (
    <div className={y < 50 ? "header" : "header blurry-header"}>
      <img className="logo" src={logo} alt="logo" />
      <NavBar />
    </div>
  );
}

export default Header;
