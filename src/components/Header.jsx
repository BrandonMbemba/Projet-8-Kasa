import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <img src="./images/LOGO.svg"></img>
            <nav>
                <ul>
                    <NavLink to = "/" className={({isActive}) => (isActive ? "underline" : "")}>
                        <li>Acceuil</li>
                    </NavLink>
                    <NavLink to = "/about" className={({isActive}) => (isActive ? "underline" : "")}>
                        <li>A propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );  
};

export default Header;