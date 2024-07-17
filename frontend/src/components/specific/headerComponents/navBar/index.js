import React from "react";
import { NavBarContainer } from "./styles";
import { Link, useLocation } from "react-router-dom";

export default function NavBar({onClick, link, svg, title, arrow, children}){
    const location = useLocation();
    const isActive = location.pathname === link;

    return(
        <NavBarContainer $isActive={isActive}>
            <button onClick={onClick}>
                <Link to={link} className="link">
                    {svg}
                    <span>{title}</span>
                    {arrow}
                </Link>
            </button>
            {children}
        </NavBarContainer>
    );
}