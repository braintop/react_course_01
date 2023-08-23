import { useState } from "react";
import "./Counter.css";
export default function Counter() {
    //phase 1 -  vars, const , and hooks
    const [counter, setCounter] = useState(0);
    console.log("render componet counter");

    //phase 2 - functions inc 100 , dec 100
    function inc100() {
        setCounter(counter + 100);
    }
    function dec100() {
        setCounter(counter - 100);
    }

    //phase 3 - jsx
    return (
        <div className="counterContainer">
            <button className="btn" onClick={inc100}>
                Add 100
            </button>
            <button className="btn" onClick={dec100}>
                Add 100
            </button>
            <p>{counter}</p>
        </div>
    );
}
