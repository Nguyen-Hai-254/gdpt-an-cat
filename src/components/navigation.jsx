import React, { useState } from "react";
import { navData, navDataAdmin } from "../utils/navData";
import Navbar from "./header/Nav";
import { Link, NavLink } from "react-router-dom";
import { Box, Button, List, ListItem, Modal, Typography } from "@mui/material";
import { AccountCircleSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { GridMenuIcon } from "@mui/x-data-grid";

export const Navigation = () => {
    const token = useSelector((state) => state.auth.access_token)
    const user = useSelector((state) => state.auth.user);

    const [showNavbar, setShowNavbar] = useState(false);
    const [isMinScreen, setIsMinScreen] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

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
                            {user && user.role === 'Admin' ?
                                navDataAdmin.map((item, index) => {
                                    return <Navbar navData={item} key={index} isMinScreen={isMinScreen} />
                                })
                                :
                                navData.map((item, index) => {
                                    return <Navbar navData={item} key={index} isMinScreen={isMinScreen} />
                                })}
                        </ul>
                    </div>
                    {token ?
                        <Box
                            sx={{
                                margin: "auto 0 auto auto",
                            }}>
                            <AccountCircleSharp
                                onClick={() => setOpen(!open)}
                                sx={{
                                    fontSize: "3.5rem",
                                    cursor: "pointer"
                                }}></AccountCircleSharp>

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={{
                                    width: { xs: "80%", sm: "50%", md: "40%", lg: "30%" },
                                    position: 'absolute',
                                    top: '30%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    bgcolor: 'background.paper',
                                    border: '2px solid #000',
                                    boxShadow: 24,
                                    p: 4,
                                }}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
                                        textAlign: "center",
                                        fontWeight: "600",
                                        fontSize: { xs: "2rem", md: "2.5rem" }
                                    }}>
                                        Profile
                                    </Typography>

                                    <List
                                        sx={{
                                            listStyleType: "none",
                                            padding: "0",
                                            background: "#fff",
                                            border: "1px solid #fff",
                                            borderRadius: "15px",
                                            width: { xs: "60%" },
                                            margin: "auto",

                                            '&& MuiListItem:hover': {
                                                color: "rgba(255, 0, 0, 0.5)"
                                            }
                                        }}
                                    >
                                        <ListItem
                                            sx={{
                                                display: 'list-item',
                                                fontSize: { xs: '14px', sm: "18px", md: "1.75rem" },
                                                lineHeight: '20px',
                                                borderBottom: '0.5px solid #555',
                                                textAlign: "center",
                                                textTransform: "capitalize",
                                                pb: "3px"
                                            }}>
                                            <NavLink
                                                style={({ isActive }) => {
                                                    return {
                                                        fontWeight: isActive ? "bold" : "",
                                                        color: '#112A46'
                                                    }
                                                }}
                                                to={'/profile'}
                                                onClick={() => setOpen(false)}
                                            >
                                                Trang cá nhân
                                            </NavLink>
                                        </ListItem>

                                        <ListItem
                                            sx={{
                                                display: 'list-item',
                                                fontSize: { xs: '14px', sm: "18px", md: "1.75rem" },
                                                lineHeight: '20px',
                                                borderBottom: '0.5px solid #555',
                                                textAlign: "center",
                                                textTransform: "capitalize",
                                                pb: "3px"
                                            }}>
                                            <NavLink
                                                style={({ isActive }) => {
                                                    return {
                                                        fontWeight: isActive ? "bold" : "",
                                                        color: '#112A46'
                                                    }
                                                }}
                                                to={'/doi-mat-khau'}
                                                onClick={() => setOpen(false)}
                                            >
                                                Đổi mật khẩu
                                            </NavLink>
                                        </ListItem>

                                        <ListItem
                                            sx={{
                                                display: 'list-item',
                                                fontSize: { xs: '14px', sm: "18px", md: "1.75rem" },
                                                lineHeight: '20px',
                                                textAlign: "center",
                                                textTransform: "capitalize",
                                                pb: "3px"
                                            }}>
                                            <NavLink
                                                style={({ isActive }) => {
                                                    return {
                                                        fontWeight: isActive ? "bold" : "",
                                                        color: '#112A46'
                                                    }
                                                }}
                                                to={'/dang-xuat'}
                                                onClick={() => setOpen(false)}
                                            >
                                                Đăng xuất
                                            </NavLink>
                                        </ListItem>
                                    </List>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        mt: 1
                                    }}>
                                        <Button variant="contained" sx={{
                                            background: "#6c757d",
                                            "&:hover": {
                                                background: "#6c757d"
                                            }
                                        }}
                                            onClick={() => setOpen(false)}
                                        >
                                            Trở về
                                        </Button>
                                    </Box>
                                </Box>
                            </Modal>
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
