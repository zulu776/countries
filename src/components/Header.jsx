import React from "react";
import { Link } from "react-router-dom";

import "../css/Header.style.css";

const Header = () => {
    return(
        <header className="header">
            <Link to="/">
            Country Details API
            </Link>
        </header>
    )
}

export default Header;