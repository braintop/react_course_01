import { useState } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";
//1. useEffect - 3 מצבים  [], בלי סוגריים , var in [counter]. useEffect running last
//2. fetch  then ......get data from server
//3. up lifting  העברת פןנקציה כפרמטר בפרופס מאבא לבן
//4. map ===> dont forget <div key={} > </div>
function App() {
    const [selectedUser, setSelectedUser] = useState(null);
    function handleSelectUser(user) {
        setSelectedUser(user);
    }
    return (
        <div className="App">
            <p>Use effect</p>
            <div className="container">
                <UserList onSelectUser={handleSelectUser} />
                <UserDetails user={selectedUser} />
            </div>
        </div>
    );
}

export default App;
