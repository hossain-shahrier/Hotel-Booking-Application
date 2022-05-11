import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Heich</span>
        <div className="navItems">
          <button className="navButtons">Register</button>
          <button className="navButtons">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
