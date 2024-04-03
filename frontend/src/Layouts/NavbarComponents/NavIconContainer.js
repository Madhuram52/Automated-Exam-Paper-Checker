import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import NavItem from "./NavItem.js";
import './NavIconContainer.css'
import { AuthContext } from "../../Context/auth-context.js";

function NavIconContainer() {

    const auth = useContext(AuthContext);
    return (
        <div className='nav-icon-container'>
            <ul>
                {/* <li><a href="#" className="active">Home</a></li> */}
                <NavItem link="#" text="About Us" />
                <NavItem link="#" text="Contact Us" />

                {!auth.isLoggedIn && (
                    <li className="user">
                        <Link to="/auth">
                            <button className="user-link">Sign Up/Log In</button>
                        </Link>
                    </li>)}

                {auth.isLoggedIn && (
                    <li className="user">
                            <button className="user-link" onClick={auth.logout}>LOG OUT</button>
                    </li>
                    )}
            </ul>
        </div>
    );
}

export default NavIconContainer;