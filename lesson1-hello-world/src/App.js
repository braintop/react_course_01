import logo from "./logo.svg";
import "./App.css";

function App() {
    //
    const user = {
        firstname: "נמש",
        lastname: "ישראל",
    };
    return (
        <div className="App">
            <p>
                Hello {user.firstname} {user.lastname}
            </p>
        </div>
    );
}

export default App;
