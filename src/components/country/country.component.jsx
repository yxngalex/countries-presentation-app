import React from "react";

import "./country.style.scss";

const Country = ({name, population, region, capital, flag}) => {
    return (
        <div className="country">
            <div className="flag">
                <img src={flag} alt={name} className="flag"/>
            </div>
            <div className="desc field">
                <div className="name">{name}</div>
                <div className="population label2">Population:{population}</div>
                <div className="region label2">Region:{region}</div>
                <div className="capital label2">Capital:{capital}</div>
            </div>
        </div>
    );
}

export default Country;
