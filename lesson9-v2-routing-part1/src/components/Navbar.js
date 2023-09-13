import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
    return (
        <div className="container">
            <div className="navbar">
                <Link to="/" className="element">
                    home
                </Link>
                <Link className="element" to="/about">
                    about
                </Link>
                <Link className="element" to="/movies">
                    movies
                </Link>
                <Link className="element" to="/profile">
                    Profile
                </Link>

                <Link className="element" to="/login">
                    Login
                </Link>
            </div>
        </div>
    );
}
