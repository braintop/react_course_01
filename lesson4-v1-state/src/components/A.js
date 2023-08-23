import React, { useState } from "react";
import "./A.css";
export default function A() {
    const [text, setText] = useState("A");
    console.log("render componet A");
    function addA() {
        setText(text + "A");
    }
    function removeA() {
        const newtext = text.slice(0, -1);
        setText(newtext);
    }

    return (
        <div className="aContainer">
            <h1>Add A</h1>
            <button onClick={addA}>Add A</button>
            <button onClick={removeA}>Remove A</button>
            <p>{text}</p>
        </div>
    );
}
