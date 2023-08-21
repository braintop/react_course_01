import logo from "./logo.svg";
import "./App.css";
import Ticket from "./components/Ticket";
import { Ticket2, Ticket3 } from "./components/Ticket";
import { useState } from "react";
function App() {
    //let num = 0;
    let [num, setNum] = useState(21);

    console.log("a");
    const tickets = [
        { name: "oren", destination: "🇺🇸", seat: "14A", gender: "Mr" },
        // { name: "orna", destination: "🇩🇪", seat: "10B", gender: "Mrs" },
        // { name: "dana", destination: "🇮🇱", seat: "9B", gender: "Mrs" },
        // { name: "david", destination: "🇹🇩", seat: "3B", gender: "Mrs" },
        // { name: "shoshana", destination: "🇹🇷", seat: "2B", gender: "Mrs" },
        // { name: "orna2", destination: "🇺🇸", seat: "14B", gender: "Mrs" },
    ];
    const ticketList = tickets.map((t) => {
        return (
            <div className="list">
                <Ticket ticket={t} />
            </div>
        );
    });
    function increament() {
        num = num + 1;
        setNum(num);
    }
    return (
        <div className="App">
            <div>
                <Ticket ticket={tickets[0]} />
            </div>
            {/* <Ticket2 name={tickets[0]} gender="Mr" /> */}

            {ticketList}
            <div>
                <button onClick={increament}>click me</button>
            </div>
            <div>num : {num}</div>
        </div>
    );
}

export default App;
