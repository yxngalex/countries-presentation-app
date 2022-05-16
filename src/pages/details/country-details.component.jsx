import React from "react";

import './country-details.style.scss';
import Button from "@material-ui/core/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const CountryDetails = ({state}) => {

    return (
        <div className="details">
            <Link to="/">
                <Button color="inherit">
                    <FontAwesomeIcon icon="fa-solid fa-moon"
                                     style={{marginRight: '0.3em', fontSize: '20px'}}/>
                    <span>Dark Mode</span>
                </Button>
            </Link>
            <div className="container">

            </div>
        </div>
    )
}

export default CountryDetails;
