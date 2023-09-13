import React from "react";
import "./Navbar2.css";
import { Link } from "react-router-dom";
export default function Navbar2() {
    return (
        <div>
            <ul className="navContainer">
                <li className="liElement">
                    <Link to="/" className="active">
                        Home
                    </Link>
                </li>
                <li className="liElement">
                    <Link to="/about">about</Link>
                </li>
                <li className="liElement">
                    <Link to="/movies">movies</Link>
                </li>
                <li className="liElement">
                    <Link to="/profile">Profile</Link>
                </li>
                <li className="liElement" style={{ float: "right" }}>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
}
