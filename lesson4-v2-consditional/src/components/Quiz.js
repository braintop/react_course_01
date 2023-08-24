import React from "react";
import { useState } from "react";
import Math from "./Math";
import English from "./English";

// event , event.target, event.target.value
//onChange
// ? : ? :
export default function Quiz() {
    // המטרה להציג מקצוע לימוד
    //phase 1 - hooks  , let , const
    const [selectProf, setselectProf] = useState("Math");
    //phase 2 - functions
    function handleSelectProf(event) {
        setselectProf(event.target.value);
    }
    //phase 3 - return js
    return (
        <div>
            <h2>List of weathers</h2>
            <form>
                <label>
                    choose weather
                    <select onChange={handleSelectProf}>
                        <option value="Math">Math</option>
                        <option value="English">English</option>
                    </select>
                </label>
            </form>
            {selectProf === "Math" ? <Math /> : <English />}
        </div>
    );
}
