import React, {useEffect, useState} from "react";
import "./countries.style.scss";
import {TextField} from "@material-ui/core";
import Country from "../../components/country/country.component";
import {getAllCountries, getCountryByName, getCountryByRegion} from "../../services/countries.service";
import {Link} from "react-router-dom";

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = () => {
        getAllCountries().then(r => {
            setCountries(r);
        })
    }

    const searchCountry = (text) => {
        if (text.length < 3 || text === '') {
            getCountryByName(text).then(data => {
                setCountries(data);
            })
        }
    }

    const filterByRegion = (region) => {
        if (region === '') return;
        getCountryByRegion(region).then(r => {
            setCountries(r);
        })
    }

    return (
        <div className="main">
            <div className="container">
                <div className="filter">
                    <div className="search">
                        <TextField id="outlined-basic" label="Search for a country..." variant="outlined"
                                   className="field" onChange={(text) => searchCountry(text.target.value)}/>
                        <div className="dropdown">
                            <select className="field" id="select" onChange={v => filterByRegion(v.target.value)}>
                                <option>Filter by Region</option>
                                <option value="africa">Africa</option>
                                <option value="america">America</option>
                                <option value="asia">Asia</option>
                                <option value="europe">Europe</option>
                                <option value="oceania">Oceania</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="countries">
                    {
                        countries.map((country, index) => <Link to={{pathname: 'details', state: country}} key={index}>
                            <Country
                                name={country.name}
                                flag={country.flag}
                                capital={country.capital}
                                region={country.region}
                                population={country.population}
                            />
                        </Link>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Countries;
