import React, {useState} from "react";

//Hooks
import useFetchData from "../hooks/useFetchData"

//Components
import Maps from "../components/GeneralView/Maps";
import Header from "../components/Header";

import "../css/GeneralView/GeneralView.style.css";

const GeneralView = () => {
     const [final,setFinal] = useState(10);
     const [initial,setInitial] = useState(0);

    const data = useFetchData(
        "https://restcountries.eu/rest/v2/all"
    );

    let Countries = data.slice(initial,final);

    return (
        <>
        <Header />
        <div className="GeneralView-div">
             
            <div className="flags-div">
                {Countries.map(infoCountry => (
                    <Maps 
                    name={infoCountry.name}
                    flag={infoCountry.flag}
                    key={infoCountry.id}
                    />
                ))} 
            </div>
            <div className="LR-button">
                <button className="left" onClick={() => {
                    setFinal(final-10);
                    setInitial(initial-10);
                    }}>Left
                </button>
                <button className="right" onClick={() => {
                    setFinal(final+10);
                    setInitial(initial+10);
                    }}>Right
                </button>
            </div>
        </div>
    </>
    );
};

export default GeneralView