import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <Link to="/">Heich & Heich</Link>
        </span>
        <div className="navItems">
          <button className="navButtons">Register</button>
          <button className="navButtons">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
