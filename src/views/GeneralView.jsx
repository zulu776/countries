import React, {useState, useEffect} from "react";

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
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [totalCountries, setTotalCountries] = useState(250);
    

    const isEmptyCountry = !countries || countries.length === 0;

    const infoScroll = async(e) => {
        setLoading(true);
        try {
            const response = await fetch("https://restcountries.eu/rest/v2/all");
            const result = await response.json();
            //Guardamos results en estado
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
        setLoading(false);
    }

    // console.log(initial);
    // console.log(final);
    // console.log(countries);
   

    useEffect(() => {
        infoScroll();
    }, []);

    

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