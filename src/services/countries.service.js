import axios from "axios";

// Morao sam v2 da iskoristim zato sto v3 i v3.1 nisu dobro vracali podatke
const URL = 'https://restcountries.com/v2';

export const getAllCountries = async () => {
    return (await axios.get(`${URL}/all`)).data;
}

export const getCountryByName = async (countryName) => {
    return (await axios.get(`${URL}/name/${countryName}`)).data;
}

export const getCountryByRegion = async (region) => {
    return (await axios.get(`${URL}/region/${region}`)).data;
}

export const getCountryByCode = async (code) => {
    return (await axios.get(`${URL}/alpha/${code}`)).data;
}
