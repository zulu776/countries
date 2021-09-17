import React from "react";
import { Link } from "react-router-dom"

//Style
import "../../css/GeneralView/Maps.style.css";

const Maps = props => {
    const { name, flag } = props;
    return (
    <>
        <div className="maps-div">
            <img src={flag} alt={name} className="maps-img"/>
            <p className="maps-p">{name}</p>
            <button className="detail-button">
                <Link to={`/Details/${name}`} className="detail-link">
                    Details!
                </Link>
            </button>
        </div>
    </>
    )   
};

export default Maps;