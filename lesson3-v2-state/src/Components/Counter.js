import React, { useState } from "react";
import "./Counter.css";
export default function Counter() {
    console.log("change counter");
    const [count, setCount] = useState("");

    function inc() {
        setCount(count + 100);
    }

    function dec() {
        setCount(count - 100);
    }

    return (
        <div className="counterContainer">
            <h1>Counters App</h1>
            <button className="btn" onClick={inc}>
                +100
            </button>
            <button className="btn" onClick={dec}>
                -100
            </button>
            <p className="txt">counter is {count}</p>x{" "}
        </div>
    );
}
