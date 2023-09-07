import React, { useContext } from "react";
import { CountriesContext } from "../context/FlagContext";

export default function Counries() {
    const { counries, isLoading } = useContext(CountriesContext);

    return (
        <div>
            <div>
                {isLoading && <p>Loading...</p>}
                {!isLoading &&
                    counries.map((item, index) => {
                        return (
                            <div key={index}>
                                <span>{item.name}</span>|
                                <span>{item.flag}</span>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
