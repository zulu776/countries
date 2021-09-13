import React, {useState,useEffect} from "react";
import { useParams, Link } from "react-router-dom";


import Header from "../components/Header";
import CreateDetails from "../components/Details/CreateDetails";

import "../css/Details/Details.style.css";

const Details = () => {
    const { name } = useParams();
    console.log(name)
    const [details, setDetails] = useState();

    const handleFetchAPI = async() => {
        const url= `https://restcountries.eu/rest/v2/name/${name}`
    
        try {
            const response = await fetch(url);
            const result = await response.json();
            setDetails(result[0]);
            console.log(details)
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        handleFetchAPI();
    },[])

    return (
        <>
        
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
                    <Link to="/GeneralView">10 Countries</Link>
                </button>
                <button className="back-search">
                    <Link to="/SearchCountry">Search</Link>
                </button>
            </div>

        </>
        
    )
       
};

export default Details;