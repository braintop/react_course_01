import Component1 from "./components/Component1";
import "./App.css";
import UserContext from "./context/UserContext";
import Uset from "./components/Uset";
import { useState } from "react";
import UserDisplay from "./components/UserDisplay";
import UserForm from "./components/UserForm";

function App() {
    const [name, setName] = useState("danieli");
    const [user, setUser] = useState({ name: "n1", email: "e", age: 1 }); //
    //const value = { name, setName };
    return (
        <div className="App">
            <UserContext.Provider value={{ name, setName, user, setUser }}>
                <Component1 />
                <Uset />
                <UserDisplay />
                <UserForm />
            </UserContext.Provider>
        </div>
    );
}

export default App;
