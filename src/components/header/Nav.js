import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav.scss"

const Navbar = ({ navData }) => {
    return (
        <li className="navbarItem">
            {navData.submenu ? (
                <>
                    <NavLink
                        to={navData.url}
                        tag={Link}
                        activeStyle={{ fontWeight: "bold" }}
                    // style={{ color: theme.text }}
                    // onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                    // onMouseOut={(event) => onMouseOut(event)}
                    >{navData.title}</NavLink>

                    <ul className="navbarSubmenu">
                        {navData.submenu.map((submenu, index) => (
                            <li key={index} className="header_item">
                                <a href={submenu.url}>{submenu.title}</a>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <a href={navData.url}>{navData.title}</a>
            )}
        </li>
    );
};

export default Navbar;