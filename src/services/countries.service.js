import axios from "axios";

export const getAllCountries = async () => {
    return (await axios.get(`https://restcountries.com/v2/all`)).data;
}

export const getCountryByName = async (countryName) => {
    return (await axios.get(`https://restcountries.com/v2/name/${countryName}`)).data;
}

export const getCountryByRegion = async (region) => {
    return (await axios.get(`https://restcountries.com/v2/region/${region}`)).data;
}
