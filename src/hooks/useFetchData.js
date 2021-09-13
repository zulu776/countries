import React, { useState,useEffect } from "react";

const useFetchData = url => {
    //Estado del componente,
    //data es el valor que se usa y setData es donde se almacena
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    
    //Consultamos la API
    const handleFetchAPI = async(e) => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            if (result.status) {
                setError(result.message);
            } else {
                setData(result);
                setError(false);
            }
            //Guardamos results en estado
            setData(result);
        } catch(e) {
            console.log(e);
        }
    };

    useEffect(() => {
        handleFetchAPI(url);
    }, [url]);

    return (data);
};

export default useFetchData;