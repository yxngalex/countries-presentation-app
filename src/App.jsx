import './App.scss';
import Header from "./components/header/header.component";
import React, {createContext, useState} from "react";
import Countries from "./components/countries/countries.component";

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
                    <Countries/>
                </div>
            </ThemeContext.Provider>

        </React.Fragment>
    );
}

export default App;
