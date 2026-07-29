import { Link, NavLink } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm bg-white/90 backdrop-blur">
      <div className="container py-2">
        <Link className="navbar-brand fw-bold fs-4 text-primary" to="/">
          <span className="me-2">⚡</span>AIHub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/compare">Compare</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-primary rounded-pill ms-lg-3" to="/">
                <FiSearch className="me-2" /> Discover
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
