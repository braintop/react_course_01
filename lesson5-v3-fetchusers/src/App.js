import { useState } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";
//https://jsonplaceholder.typicode.com/

function App() {
    const [selectedUser, setSelectedUser] = useState(null);
    function handleSelectUser(user) {
        setSelectedUser(user);
    }
    return (
        <div className="App">
            <h1>Users</h1>
            <div className="container">
                <UserList onSelectUser={handleSelectUser} />
                <UserDetails user={selectedUser} />
            </div>
        </div>
    );
}

export default App;
