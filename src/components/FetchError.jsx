import React from "react";

import "../css/SearchCountry/FetchError.style.css";

const FetchError = ({ message }) => {
  return (
    <div className="error-warning">
      <p className="error-title">Error !</p>
      <p className="error-text">The country entered does not exist,
      please check the name and that 
      it is in English</p>
    </div>
  );
};

export default FetchError;