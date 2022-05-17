import './App.scss';
import Header from "./components/header/header.component";
import React, {createContext, useState} from "react";
import Countries from "./pages/countries/countries.component";
import {Routes, Route} from 'react-router-dom';
import CountryDetails from "./pages/country-details/country-details.component";

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    }

    return (
        <React.Fragment>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <div className="app" id={theme}>
                    <Header onClick={toggleTheme} label={theme}/>
                    <Routes>
                        <Route path="/about" element={<CountryDetails/>}/>
                        <Route exact path="/" element={<Countries/>}/>
                    </Routes>
                </div>
            </ThemeContext.Provider>

        </React.Fragment>
    );
}

export default App;
