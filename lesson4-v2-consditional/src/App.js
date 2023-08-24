import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import { F, G } from "./components/WeatherDisplay";
import Quiz from "./components/Quiz";
import User from "./components/User";
function App() {
    const user = {
        firstname: "oren",
        age: 12,
        email: "oren@oren.com",
    };
    const comment = "Sorry.....";
    return (
        <div className="App">
            <User />

            {user.age > 18 ? (
                <div>
                    <p>firstname: {user.firstname}</p>
                    <p>age: {user.age}</p>
                    <p>email: {user.email}</p>
                </div>
            ) : (
                <div style={{ color: "red" }}>{comment}</div>
            )}
            <WeatherDisplay />
            <Quiz />
            <F />
            <G />
        </div>
    );
}

export default App;
