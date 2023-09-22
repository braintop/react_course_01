import { createContext, useState, useEffect } from "react";
//phase 1
const CountriesContext = createContext();
//phase 2
export default function CountryProvider({ children }) {
    const BASE_URL = "http://localhost:9000/countries";

    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    async function fetchCountries() {
        setIsLoading(true);
        try {
            const res = await fetch(BASE_URL);
            const data = await res.json();
            //console.log(data);
            setCountries(data);
        } catch {
            alert("There was error");
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchCountries();
    }, []);

    return (
        <CountriesContext.Provider
            value={{
                countries,
                isLoading,
            }}
        >
            {isLoading ? <p>Loading...</p> : <p></p>}
            {children}
        </CountriesContext.Provider>
    );
}
export { CountriesContext };
