import React from "react";
import { Link } from "react-router-dom";

//Style
import "../../css/SearchCountry/MapsSearch.style.css";

const MapsSearch = props => {
    const { name, flag, id } = props;
    return (
    <>
        <div className="container-div">
            <div className="maps-div2">
                <img src={flag} className="maps-img2"/>
                <p>{name}</p>
                <button className="button-detail">
                <Link to={`/details/${name}`}>Details!</Link>
                </button>
            </div>
        </div>
    </>
    )   
};

export default MapsSearch;