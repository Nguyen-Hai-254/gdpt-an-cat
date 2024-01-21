import React, { useState } from "react";
import { navData } from "../utils/navData";
import Navbar from "./header/Nav";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { AccountCircleSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { GridMenuIcon } from "@mui/x-data-grid";

export const Navigation = () => {
  const token = useSelector((state) => state.auth.access_token)


  const [showNavbar, setShowNavbar] = useState(false);
  const [isMinScreen, setIsMinScreen] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    setIsMinScreen(true);
  };

  return (
    <>
      {/* <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{ position: "sticky" }} >
        <div className="container" style={{ display: "flex", alignItems: "center" }}>
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

          {token ?
            <Box sx={{
              margin: "auto 0 auto auto",
            }}>
              <AccountCircleSharp sx={{
                fontSize: "3.5rem"
              }}></AccountCircleSharp>
            </Box>
            :
            <Typography variant="h5" margin="auto 0 auto auto">
              <Link to="/login">
                Đăng nhập
              </Link>
            </Typography>
          }
        </div>
      </nav > */}

      <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{ position: "sticky" }}>
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand page-scroll">
              GĐPT An Cát
            </Link>{" "}
          </div>

          <div style={{
            height: showNavbar ? "100vh" : "0vh",
            width: showNavbar ? "100vw" : "0vw",
            position: "absolute",
            top: "0",
            left: "0"
          }}
            onClick={() => setShowNavbar(false)}
          >
          </div>
          <div className="menu-icon" onClick={() => handleShowNavbar()} style={{ zIndex: "3000" }}>
            <GridMenuIcon
              sx={{
                fontSize: "28px",
                color: "#888"
              }} />
          </div>

          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul className="nav navbar-nav navbar-right">
              {navData.map((item, index) => {
                return <Navbar navData={item} key={index} isMinScreen={isMinScreen} />
              })}
            </ul>
          </div>
          {token ?
            <Box sx={{
              margin: "auto 0 auto auto",
            }}>
              <AccountCircleSharp sx={{
                fontSize: "3.5rem"
              }}></AccountCircleSharp>
            </Box>
            :
            <Typography variant="h5" margin="auto 0 auto auto">
              <Link to="/login">
                Đăng nhập
              </Link>
            </Typography>
          }
        </div>
      </nav>
    </>
  );
};
