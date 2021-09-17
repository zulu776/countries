import React from "react";
import { Link } from "react-router-dom";

//Style
import "../../css/SearchCountry/MapsSearch.style.css";

const MapsSearch = props => {
    const { name, flag } = props;
    return (
    <>
        <div className="container-div">
            <div className="maps-div2">
                <img src={flag} alt={name} className="maps-img2"/>
                <p>{name}</p>
                <button className="detail-button">
                <Link to={`/details/${name}`} className="detail-link">
                    Details!
                </Link>
                </button>
            </div>
        </div>
    </>
    )   
};

export default MapsSearch;