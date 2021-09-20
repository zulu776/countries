import React from "react";

import Header from "../components/Header";

import "../css/NotFound/NotFound.style.css";

const NotFound = () => {
    return(
        <>
            <Header />
            <div className="notfound-container">
                <p className="notfound-title">PAGE NOT FOUND</p>
                <p className="notfound-p">Error 404</p>
            </div>
        </>
    );
};

export default NotFound;