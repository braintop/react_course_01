import React from "react";
import { useContext } from "react";
import { CountriesContext } from "../contexts/CountryContext";
export default function Counries() {
    const { countries, isLoading } = useContext(CountriesContext);
    console.log(countries);
    return (
        <div>
            {countries.map((item) => {
                return (
                    <div key={item.name}>
                        <span>{item.name}</span> | <span>{item.flag}</span>
                    </div>
                );
            })}
        </div>
    );
}
