import React, {useState} from "react";

//Components
import Maps from "../components/GeneralView/Maps";
import Header from "../components/Header";

import "../css/GeneralView/GeneralView.style.css";
import InfiniteScroll from "react-infinite-scroller";

const GeneralView = () => {
    const [data, setData] = useState([]);
    const [final,setFinal] = useState(10);
    const [initial,setInitial] = useState(0);
    const [countries,setCountries] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const totalCountries = 250;
    

    const isEmptyCountry = !countries || countries.length === 0;

    const infoScroll = async(e) => {
        try {
            const response = await fetch("https://restcountries.eu/rest/v2/all");
            const result = await response.json();
            setData(result);
        } catch(e) {
            console.log(e);
        }
        if (data && data) {
            const newCountries = [...countries, ...data.slice(initial,final)];
            console.log(newCountries);
            if(newCountries.length >= totalCountries) {
                setHasMore(false);
            };
        setCountries(newCountries);
        setFinal(final + 10);
        setInitial(initial + 10);
        }; 
    };  

    return (
        
  
        <InfiniteScroll
        pageStart={0}
        loadMore={infoScroll}
        hasMore={hasMore}
        loader={"Loading..."}
        style={{ width: "100%" }}
        >
        <Header /> 
        <div className="GeneralView-div">
        <div className="flags-div">
            {!isEmptyCountry &&
            countries.map(infoCountry => (
                <Maps 
                name={infoCountry.name}
                flag={infoCountry.flag}
                key={infoCountry.id}
                />
            ))}
        </div>
        </div>
        </InfiniteScroll>
    
    );
};

export default GeneralView