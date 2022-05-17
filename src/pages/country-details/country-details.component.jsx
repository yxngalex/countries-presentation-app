import React from "react";

import './country-details.style.scss';
import Button from "@material-ui/core/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, useLocation} from "react-router-dom";

const CountryDetails = () => {
    let location = useLocation();
    let state = location.state;


    return (
        <div className="details">
            <div className="container">
                <Link to="/">
                    <Button color="default" className="field">
                        <FontAwesomeIcon icon="fa-solid  fa-arrow-left-long"
                                         style={{marginRight: '0.3em', fontSize: '20px'}}/>
                        <span>Back</span>
                    </Button>
                </Link>
                <div className="description">
                    <img src={state.flag} alt={state.name} className="flag"/>
                    <div className="about">
                        <h2>{state.name}</h2>
                        <div className="more">
                            <span>Native Name: <div className="data">{state?.name}</div></span>
                            <span>Population: <div className="data">{state?.population}</div></span>
                            <span>Region: <div className="data">{state?.region}</div></span>
                            <span>Sub Region: <div className="data">{state?.subregion}</div></span>
                            <span>Capital: <div className="data">{state?.capital}</div></span>
                            <span>Top Level Domain: <div className="data">{state?.topLevelDomain[0]}</div></span>
                            <span>Currencies: <div
                                className="data">{state?.currencies?.map(cur => cur.name)}</div></span>
                            <span>Languages: <div
                                className="data">{state?.languages?.map(lang => lang.name + ', ')}</div></span>
                            <div className="map-button">
                                <a href={`https://www.google.com/maps/place/${state.name}`} target='_blank'
                                   rel="noreferrer">
                                    <Button color="default"
                                            className="field">
                                        <span>View on Map</span>
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="border-countries">
                            <div className="borders-label">Borders:</div>
                            {
                                state?.borders?.map((bor, index) => <Button
                                        color="default"
                                        className="field borders"
                                        key={index}
                                    >
                                        {bor}
                                    </Button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails;
