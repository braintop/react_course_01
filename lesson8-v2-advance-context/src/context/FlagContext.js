import { createContext, useEffect, useState } from "react";

const CountriesContext = createContext();

export default function CountryProvider({ children }) {
    const BASE_URL = "http://localhost:9000/countries";
    const [counries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchCountries() {
        setIsLoading(true);
        try {
            const res = await fetch(BASE_URL);
            const data = await res.json();
            setCountries(data);
        } catch {
            alert("error occured");
        } finally {
            console.log("a");
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchCountries();
        console.log("b");
    }, []);

    return (
        <CountriesContext.Provider value={{ counries, isLoading }}>
            {children}
        </CountriesContext.Provider>
    );
}

export { CountriesContext };
