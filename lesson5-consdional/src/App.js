import "./App.css";
import { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
function App() {
    //phase 1- hooks, let, vars .....
    const [show, setShow] = useState(false);
    const user = {
        name: "john",
        email: "john@john.com",
        age: 12,
    };
    const message = "Sorry, you are too young to view this information.";
    //phase 2 - function

    //phase 3 - return jsx
    return (
        <div className="App">
            {/* {!show && <p>Loading... </p>}
            {show && (
                <div>
                    Loaded
                    <input type="text" />
                </div>
            )}
            <button onClick={test}>test</button>

            {show ? <p>🟢</p> : <p>🔴</p>} */}
            {/* <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
                {user.age > 18 ? <p>{user.age}</p> : <p>{message}</p>}
            </div> */}
            <WeatherDisplay />
        </div>
    );
}

export default App;
