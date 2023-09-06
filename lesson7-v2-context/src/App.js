import logo from "./logo.svg";
import "./App.css";
import DisplayUser from "./components/DisplayUser";
import FormUser from "./components/FormUser";
import { useState } from "react";
import UserContext from "./context/UserContetx";
import Switch from "./components/Switch";
import ThemeContext from "./context/ThemeContext";

function App() {
    const [user, setUser] = useState({ name: "n", email: "e", age: 1 });
    console.log("A");
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const styles = {
        backgroundColor: isDarkTheme ? "black" : "white",
        color: isDarkTheme ? "white" : "black",
        height: "100vh",
    };
    return (
        <div className="App">
            <UserContext.Provider value={{ user, setUser }}>
                <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
                    <div style={styles}>
                        <Switch />
                        <FormUser />
                        <DisplayUser />
                    </div>
                </ThemeContext.Provider>
                {console.log("B")}
            </UserContext.Provider>
        </div>
    );
}

export default App;
