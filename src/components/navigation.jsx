import React from "react";
import { navData } from "../utils/navData";
import Navbar from "./header/Nav";
import { Link, useLocation } from "react-router-dom";

export const Navigation = ({ pathname }) => {
  const location = useLocation();
  console.log(location.pathname);
  
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{ position: "sticky" }} >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link to="/" className="navbar-brand page-scroll">
            GĐPT An Cát
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {navData.map((item, index) => {
              return <Navbar navData={item} key={index} />
            })}
          </ul>
        </div>
      </div>
    </nav >
  );
};
