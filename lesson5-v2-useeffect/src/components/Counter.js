import React from "react";
import { useEffect, useState } from "react";

export default function Counter() {
    const [counter, setConuter] = useState(0);
    console.log("A");
    useEffect(() => {
        //get data from firebase, mysql, server
        console.log("start effect");
        document.title = counter;

        //react js client , (react native / flutter)  (flask - nodejs)
        //unmount
        return () => {
            console.log("by by effect");
        };
    }, [counter]); //[] is dependencies
    function inc() {
        setConuter(counter + 1); //async
    }

    return (
        <div>
            <p>{console.log("B")}</p>
            <button onClick={inc}>Click me</button>
            <p> {counter}</p>
            <p>{console.log("C")}</p>
        </div>
    ); //start useEffects ....
}
