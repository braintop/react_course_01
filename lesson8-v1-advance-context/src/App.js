import { useState } from "react";
import "./App.css";
import CountryProvider from "./contexts/CountryContext";
import Counries from "./components/Counries";
import Accordion from "./components/Accordion";

function App() {
    return (
        <div>
            <CountryProvider>
                <Counries />
            </CountryProvider>

            <h1>Accordion Example</h1>
            <Accordion>
                <p>This is some content inside the accordion.</p>
                <p>Vic</p>
                <p>Zvi</p>
                <p>smu</p>
                <p>Zeha</p>
            </Accordion>
            {/* <Accordion /> */}
        </div>
    );
}

export default App;
