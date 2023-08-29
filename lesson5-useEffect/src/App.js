import "./App.css";
import { useState, useEffect } from "react";
function App() {
    const [counter, setCounter] = useState(0);
    const [seconds, setSeconds] = useState(0);
    console.log("a");
    useEffect(() => {
        console.log("b");
        document.title = counter;
    }, [counter]);
    useEffect(() => {
        const i = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
        return () => {
            clearInterval(i);
        };
    }, []);
    console.log("c");
    function inc() {
        setCounter(counter + 1); //async
        console.log(counter);
    }
    return (
        <div className="App">
            {console.log("d")}
            <p>{counter}</p>
            <button onClick={inc}></button>
            <p>{seconds}</p>
        </div>
    );
}

export default App;
