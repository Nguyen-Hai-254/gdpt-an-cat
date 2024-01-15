import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav.scss"
import { ExpandMore } from "@mui/icons-material";

const Navbar = ({ navData, isMinScreen }) => {
    return (
        <li className="navbarItem">
            {navData.submenu ? (
                <>
                    <NavLink
                        to={navData.url}
                        tag={Link}
                        style={({ isActive }) =>
                            isActive ? {
                                fontWeight: "bold",
                            } : {}
                        }
                        className="navbar_title"
                    >{navData.title}
                        <ExpandMore sx={{ fontSize: 24, fontWeight: "bold" }} />
                    </NavLink>

                    {!isMinScreen &&
                        <ul className="navbarSubmenu">
                            {navData.submenu.map((submenu, index) => (
                                <li key={index} className="header_item">
                                    <NavLink
                                        tag={Link}
                                        to={submenu.url}
                                    >
                                        {submenu.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    }
                </>
            ) : (
                <NavLink
                    className="navbar_title"
                    to={navData.url}
                    style={({ isActive }) =>
                        isActive ? {
                            fontWeight: "bold",
                        } : {}
                    }
                >{navData.title}</NavLink>
            )}
        </li>
    );
};

export default Navbar;