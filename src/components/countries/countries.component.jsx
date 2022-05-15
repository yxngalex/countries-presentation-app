import React, {useState} from "react";
import "./countries.style.scss";
import {TextField} from "@material-ui/core";
import {FormControl} from "@material-ui/core";
import {Select} from "@material-ui/core";
import {InputLabel} from "@material-ui/core";
import {MenuItem} from "@material-ui/core";

const Countries = () => {
    const [countries, setCountries] = useState(null);

    return (
        <div className="main">
            <div className="container">
                <div className="filter">
                    <div className="search">
                        <TextField id="outlined-basic" label="Search for a country..." variant="outlined"
                                   className="field"/>
                        <div className="dropdown">
                            <FormControl className="field" id="select">
                                <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={countries}
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={"Africa"}>Africa</MenuItem>
                                    <MenuItem value={"America"}>America</MenuItem>
                                    <MenuItem value={"Asia"}>Asia</MenuItem>
                                    <MenuItem value={"Europe"}>Europe</MenuItem>
                                    <MenuItem value={"Oceania"}>Oceania</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="countries">

                </div>
            </div>
        </div>
    );
}

export default Countries;
