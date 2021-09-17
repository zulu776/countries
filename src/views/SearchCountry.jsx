import React, {useState} from "react";

import Header from "../components/Header";
import SearchingC from "../components/SearchCountry/SearchingC";
import MapsSearch from "../components/SearchCountry/MapsSearch";
import FetchError from "../components/FetchError";

import "../css/SearchCountry/SearchCountry.style.css"

const SearchCountry = () => {

    const [countryName, setCountryName] = useState(null);
    const [countryInfo, setCountryInfo] = useState(null);
    const [ error, setError] = useState (false);

    const handleFetchAPI = async(e) => {
        const url= `https://restcountries.eu/rest/v2/name/${countryName}`
        e.preventDefault();

        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(result.status)
            if (result.status === 404) {
                setError(true);
            }else{
                setError(false);
                setCountryInfo(result[0]);
            }
            console.log(error)
            console.log(countryInfo)
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <>
            <div className="search-container">
                <Header />
                <SearchingC 
                setCountryName={setCountryName}
                handleSearchCountries={handleFetchAPI} 
                />
                {error ? (
                    <FetchError />
                ) : (
                countryInfo && (
                        <MapsSearch
                        name={countryInfo.name}
                        flag={countryInfo.flag}
                        key={countryInfo.id}
                        />
                    )
                    )
                }
            </div>
        </>
    );
};

export default SearchCountry;