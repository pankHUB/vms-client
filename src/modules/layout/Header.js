import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Header = () => {
  return (
    <div className="nav_navbar">
      <div className="item">
        <Link to="/" bg="secondary">
          <button className="btn" style={{ textAlign: "center" }}>
            <h6>User Management System</h6>
          </button>
        </Link>
      </div>
      <div className="btn"> </div>
    </div>
  );
};

export default Header;
