import React from "react";
import { useState } from "react";
import "./A.css";
export default function A() {
    const [text, setText] = useState("");
    function addA() {
        setText(text + "A");
        console.log(text); //old value
    }
    //setText(callback)//callback(lastvalue)

    function addA2() {
        setText((val) => {
            val += "A";
            console.log(val);
            return val;
        }); //text + "A" is value. text+=a פעולה
    }
    function removeA() {
        if (text.length > 0) {
            setText(text.slice(0, -1)); //async function
        }
        alert(text);
    }
    return (
        <div className="containerA">
            <h2>String Add A or remove A</h2>
            <p>{text}</p>
            <button className="btn" onClick={addA2}>
                Add A
            </button>
            <button className="btn" onClick={removeA}>
                Remove A
            </button>
        </div>
    );
}
