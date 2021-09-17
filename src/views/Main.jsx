import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

import "../css/Main/Main.css"

const Main = () => {

    return (
    <>
        
        <Header />
        <div className="main-container">
            <div className="main-div">
                <button className="main-button">
                    <Link to="/GeneralView" className="main-link">
                        View per group of 10 Countries
                    </ Link>
                </button>
                <button className="main-button">
                    <Link to="/SearchCountry" className="main-link">
                        Search Country for Name
                    </ Link>
                </button>
            </div>
        </div>
    </>
    );
};

export default Main;