import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { UserContext } from "./context/UserContext";
// Import the functions you need from the SDKs you need
import { db } from "./services/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { Toaster } from "react-hot-toast";
import { auth } from "./services/FirebaseConfig";
import { Route, Routes } from "react-router-dom";
import MyShifts from "./components/myShifts/MyShifts";
import ShiftPopup from "./components/addShifts/ShiftPopup";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import EditProfile from "./components/EditProfile/EditProfile";
import MyShift1 from "./components/Myshift1/MyShift1";
import AddShift from "./components/addShift1/addShift";

function App() {
    const { user, setUser } = useContext(UserContext);

    const usersCollectionRef = collection(db, "users");
    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        const myUsers = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        //setUsers(myUsers);
        console.log(myUsers);
    };
    useEffect(() => {
        getUsers();
    }, []);

    if (!auth.currentUser) {
        return <Login />;
    }

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/myshifts" element={<MyShifts />} />
                <Route path="/myshifts1" element={<MyShift1 />} />

                <Route path="/register" element={<Register />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route path="/editProfile" element={<EditProfile />} />

                <Route
                    path="/addShift"
                    element={<ShiftPopup title={"Add a shift"} />}
                />
                <Route
                    path="/addShift1"
                    element={<AddShift title={"Add a shift"} />}
                />
            </Routes>

            <Toaster />
        </div>
    );
}
export default App;
