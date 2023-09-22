import { Toaster } from "react-hot-toast";
import "./App.css";
import Register from "./components/Register/Register";
// Import the functions you need from the SDKs you need
import { db } from "./services/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth } from "./services/FirebaseConfig";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AddShift from "./components/AddShift/AddShift";
import A from "./components/A";
import EditShift from "./components/EditComponent/EditShift";
function App() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        const myUsers = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setUsers(myUsers);
    };
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/editshift"
                    element={<EditShift title={"Edit a shift"} />}
                />

                <Route
                    path="/addshift"
                    element={<AddShift title={"Add a shift"} />}
                />
            </Routes>
            <Toaster />
        </div>
    );
}

export default App;
