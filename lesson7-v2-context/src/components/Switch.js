import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Switch() {
    const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

    const toggleSwitch = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={toggleSwitch}
                />
                <span className="slider"></span>
            </label>
            <p>Switch is {isDarkTheme ? "dark" : "light"}</p>
            {console.log("E")}
        </div>
    );
}
