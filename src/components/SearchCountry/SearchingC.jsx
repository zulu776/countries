import React from "react";

import "../../css/SearchCountry/SearchingC.style.css";

const SearchingC = ({setCountryName, handleSearchCountries}) => {
    return (
        <div className="search-div">
            <form action="" onSubmit={handleSearchCountries}>
                <input className="text-area" type="text" onChange={e => setCountryName(e.target.value)} />
                <input className="submit-area" type="submit" value="Search !" />
            </form>
        </div>
    );
};

export default SearchingC;