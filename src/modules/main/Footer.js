import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="nav_footer">
      <div className="item">
        <Link to="/" bg="secondary">
          <button className="btn" style={{ textAlign: "center" }}>
            <span className="copyright">Copyright &#169; plutos.one</span>
          </button>
        </Link>
      </div>
      <div className="btn"> </div>
    </div>
  );
};

export default Footer;
