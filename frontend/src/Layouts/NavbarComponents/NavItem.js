import React from "react";
import { Link } from "react-router-dom";
import './NavItem.css'

function NavItem(props) {
    return (
        <li>
            <Link to={props.link} className="nav-link">
                {props.text}
            </Link>
        </li>
    )
}

export default NavItem