import React, {useEffect} from "react";
import {Link, useLocation} from 'react-router-dom';

function Navbar() {

  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    }, [location]
  );

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#abc4ff", color: "#0F2C73" }}
      >
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className={`nav-link ${location.pathname === "/"? "active": ""}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about"? "active": ""}`} to="/about">
                About
              </Link>  
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
