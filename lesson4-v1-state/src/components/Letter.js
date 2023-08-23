import React, { useState } from "react";
import "./Letter.css";
export default function Letter({ letter }) {
    const [text, setText] = useState(letter.char);
    console.log("render component letter");

    function addLetter() {
        const x = "A".repeat(3); //"AAA"
        setText(text + letter.char.repeat(letter.nums));
    }
    function removeLetter() {
        const newText = text.slice(0, -1 * letter.nums);
        setText(newText);
    }
    return (
        <div className="aContainer">
            <h1>
                Add Letter {letter.char} nums {letter.nums}
            </h1>
            <button onClick={addLetter}>Add {letter.num}</button>
            <button onClick={removeLetter}>Remove {letter.num}</button>

            <p>{text}</p>
        </div>
    );
}
