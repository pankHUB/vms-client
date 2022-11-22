import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="nav_header">
      <div className="item">
        <Link to="/" bg="secondary">
          <button className="btn">
            {/* <img
            alt=""
            src="/favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
            /> */}
            Home
          </button>
        </Link>
      </div>
      <div className="item">
        <Link to="/details">
          <button className="btn">Details</button>
        </Link>
      </div>
      <div className="btn"> </div>
    </div>
  );
};

export default Header;
