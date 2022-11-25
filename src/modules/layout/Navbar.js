import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
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
        <Link to="/voucher">
          <button className="btn">Voucher</button>
        </Link>
      </div>
      <div className="btn"> </div>
    </div>
  );
};

export default Navbar;
