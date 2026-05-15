import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const location = useLocation()

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-area">
          <div className="logo-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="logo-text">
            <strong>Research</strong>
            <span>Knowledge Platform</span>
          </div>
        </Link>

        <nav className="nav-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>

          <Link
            to="/research"
            className={location.pathname.includes("/research") ? "active" : ""}
          >
            Research Topics
          </Link>

          <Link
            to="/research-integrity"
            className={
              location.pathname === "/research-integrity"
                ? "active"
                : ""
            }
          >
            About
          </Link>

          <Link
            to="/accessibility"
            className={
              location.pathname === "/accessibility"
                ? "active"
                : ""
            }
          >
            Accessibility
          </Link>
        </nav>

        <div className="navbar-actions">
          <button className="language-btn">
            🌐 EN
          </button>

          <Link to="/research" className="explore-btn">
            Explore Research
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar