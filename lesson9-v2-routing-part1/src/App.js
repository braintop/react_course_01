import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Movies from "./components/Movies";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Navbar2 from "./components/Navbar2";
import Navbar from "./components/Navbar";

function App() {
    //
    const user = {
        firstname: "נמש",
        lastname: "ישראל",
    };
    return (
        <div className="App">
            {/* <Navbar /> */}
            <BrowserRouter>
                <Navbar2 />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
