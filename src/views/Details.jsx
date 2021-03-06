import React, {useState,useEffect} from "react";
import { useParams, Link } from "react-router-dom";


import Header from "../components/Header";
import CreateDetails from "../components/Details/CreateDetails";

import "../css/Details/Details.style.css";

const Details = () => {

    const { name } = useParams();
    console.log(name)
    const [details, setDetails] = useState();
    const url= `https://restcountries.com/v2/name/${name}`

   

    useEffect(() => {
        
        const handleFetchAPI = async() => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setDetails(result[0]);
            } catch (error) {
                console.log(error);
            };
        };
        handleFetchAPI();
    },[url])

    return (
        <>
            <div className="details-container">
                <Header />
                {details && (
                <CreateDetails 
                flag={details.flag}
                name={details.name}
                capital={details.capital}
                borders={details.borders}
                languages={details.languages[0].name}
                currency={details.currencies[0].name}
                population={details.population}
                />
                )}
                <div className="detail-div-div">
                    <button className="back-general">
                        <Link to="/GeneralView">All Countries</Link>
                    </button>
                    <button className="back-search">
                        <Link to="/SearchCountry">Search</Link>
                    </button>
                </div>
            </div>

        </>
        
    )
       
};

export default Details;
