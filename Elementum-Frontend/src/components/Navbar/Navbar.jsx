import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Elementum</div>

      <nav>
        <a href="#">Home</a>
        <a href="#">Studio</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#">FAQs</a>
      </nav>

      <div className="menu" >
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Navbar;