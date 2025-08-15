import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{height:"70px"}}>
      <div className="container">
        <Link className="navbar-brand col-5" to="/">
          <img
            src="/media/Images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse col-7 ms-5"
          id="navbarSupportedContent"
        >
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <Link className="nav-link" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
