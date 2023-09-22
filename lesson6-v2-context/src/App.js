import logo from "./logo.svg";
import "./App.css";
import UserContext from "./context/UserContext";
import { useContext } from "react";

function App() {
    return (
        <div className="App">
            <h1>Context</h1>
            <Component1 />
            <UserContext.Provider value="oren233">
                <Component2 />
                <Component3 />
            </UserContext.Provider>
        </div>
    );
}
function Component1() {
    const name = useContext(UserContext);
    return (
        <div className="border">
            component1
            <p>{name}</p>
            <Component2 />
        </div>
    );
}
function Component2() {
    const value = useContext(UserContext);
    return (
        <div className="border">
            component2
            <p>{value}</p>
            <Component3 />
        </div>
    );
}

function Component3() {
    const value = useContext(UserContext);

    return (
        <div className="border">
            component3
            <p>{value}</p>
        </div>
    );
}

export default App;
