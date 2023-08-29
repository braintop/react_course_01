import React, { useState } from "react";
import "./WeatherDisplay.css";
//המטרה להציג הודעה משתנה על פי בחירה של המשתמש
export default function WeatherDisplay() {
    //phase 1 - hooks, let ....
    const [message, setMessage] = useState("sunny");
    //phase 2 - functions
    const messages = ["Sunny day 🟡 ", "Raining day ☔️ ", "Snowing day ⛄️"];
    function handleChange(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(message);
        // if(event.target.value==="sunny"){
        //     setMessage(message[0])
        // }
        // else if(event.target.value==="raining"){
        //     setMessage(message[1])
        // }
        // else if(event.target.value==="snowing"){
        //     setMessage(message[2])
        // }

        setMessage(event.target.value);
    }

    //phase 3 - return jsx
    return (
        <div className="weatherContainer">
            <label>Choose the current weather:</label>
            <select onChange={handleChange}>
                <option value="sunny">Sunny</option>
                <option value="raining">Raining</option>
                <option value="snowing">Snowing</option>
            </select>
            {message === "sunny" ? (
                <p>{messages[0]}</p>
            ) : message === "raining" ? (
                <p>{messages[1]}</p>
            ) : (
                <p>{messages[2]}</p>
            )}

            {/* {message === "sunny" && <p>{messages[0]}</p>}
            {message === "raining" && <p>{messages[1]}</p>}
            {message === "snowing" && <p>{messages[2]}</p>} */}
        </div>
    );
}
