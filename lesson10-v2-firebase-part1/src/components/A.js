import React from "react";
import { useRef, useParams } from "react";
export default function A() {
    const inputRef = useRef();
    const h1ref = useRef();
    let counter = 0;
    const spanref = useRef();
    function inc() {
        counter += 1;
        console.log(counter);
        spanref.current.innerText = counter;
    }
    console.log("refefefefefefefefefefefefefefe");
    function test() {
        //inputRef.current.focus();
        //alert(inputRef.current.value);
        console.log(h1ref.current.innerText);
        h1ref.current.style.color = "red";
        //alert(h1ref.current.value);
    }

    return (
        <div>
            <h3>
                Value: <span ref={spanref}>{counter}</span>
            </h3>
            <div>x</div>
            <h1 ref={h1ref}>A</h1>
            <input type="text" ref={inputRef} placeholder="fistname" />
            <input type="text" placeholder="lastname" />
            <button onClick={inc}>test</button>
        </div>
    );
}
