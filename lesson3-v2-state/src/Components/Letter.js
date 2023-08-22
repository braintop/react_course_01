import React, { useState } from "react";
// {
//     char
//     nums
// }
export default function Letter({ letter }) {
    const [text, setText] = useState("");
    function addCharacters() {
        setText(text + letter.char.repeat(letter.nums));
    }
    function removeCharacters() {
        const newText = text.slice(0, -1 * letter.nums);
        setText(newText);
    }

    return (
        <div className="containerA">
            <h2>
                String Add {letter.char} or remove {letter.char} {letter.nums}
            </h2>
            <p>{text}</p>
            <button className="btn" onClick={addCharacters}>
                Add {letter.char}
            </button>
            <button className="btn" onClick={removeCharacters}>
                Remove {letter.char}
            </button>
        </div>
    );
}
