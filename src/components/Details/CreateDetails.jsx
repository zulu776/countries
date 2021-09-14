import React from "react";

import "../../css/Details/CreateDetails.style.css";

const CreateDetails = props => {

    const {flag,name,
        capital,borders,languages,currency,population} = props;

        let number = parseInt(population);
        let population2 = Intl.NumberFormat("en-DE").format(number)

        let borders2 = borders.join(' / ')

    return(
    <>    
        <div className="detail-div">
            <div className="detail-box-img">
                <img src={flag} alt={name} className="detail-img"/>
            </div>
            <div className="detail-info-div">
                <div className="box">
                    <p className="detail-title">Name:</p>
                    <p className="detail">{name}</p>
                </div>
                <div className="box">
                    <p className="detail-title">Capital:</p>
                    <p className="detail">{capital}</p>
                </div>
                <div className="box">
                    <p className="detail-title">Borders:</p>
                    <p className="detail">{borders2}</p>
                </div>
                <div className="box">
                    <p className="detail-title">Language:</p>
                    <p className="detail">{languages}</p>
                </div>
                <div className="box">
                    <p className="detail-title">Currency:</p>
                    <p className="detail">{currency}</p>
                </div>
                <div className="box">
                    <p className="detail-title">Population:</p>
                    <p className="detail">{population2}</p>
                </div>
            </div>
        </div>
    </>
    )
};

export default CreateDetails;