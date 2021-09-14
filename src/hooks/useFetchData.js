import { useState,useEffect } from "react";

const useFetchData = url => {
    //Estado del componente,
    //data es el valor que se usa y setData es donde se almacena
    const [data, setData] = useState([]);
    
    //Consultamos la API
    

    useEffect(() => {
        const handleFetchAPI = async(e) => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                //Guardamos results en estado
                setData(result);
            } catch(e) {
                console.log(e);
            }
        };
        handleFetchAPI();
    }, [url]);

    return (data);
};

export default useFetchData;