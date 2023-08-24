import React from "react";
import { useState } from "react";

// event , event.target, event.target.value
//onChange
// ? : ? :
export default function WeatherDisplay() {
    // המטרה להציג הודעה בהתאם לבחירה
    //phase 1 - hooks  , let , const
    const [selectWeather, setSelectWeather] = useState("sunny");
    //phase 2 - functions
    function handleSelectWeather(event) {
        console.log(event.target);
        setSelectWeather(event.target.value);
    }
    const messages = [
        "Today is sunny day",
        "Today is winter a day",
        "Today is snowing a day",
    ];
    //phase 3 - return js
    return (
        <div>
            <h2>List of weathers</h2>
            <form>
                <label>
                    choose weather
                    <select onChange={handleSelectWeather}>
                        <option value="sunny">sunny</option>
                        <option value="raining">raining</option>
                        <option value="snowing"> snowing</option>
                    </select>
                </label>
            </form>
            {selectWeather === "sunny" ? (
                <p>{messages[0]}</p>
            ) : selectWeather === "raining" ? (
                <p>{messages[1]}</p>
            ) : (
                <p>{messages[2]}</p>
            )}
        </div>
    );
}

export function F() {
    return <div>f</div>;
}

export function G() {
    return <div>g</div>;
}
