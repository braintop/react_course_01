import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    //const goBack = useGoBack();
    function login() {
        navigate("/movies", { replace: true });
    }
    function goBack() {
        navigate(-1);
    }
    return (
        <div>
            <div>
                <input type="email" placeholder="email" />
            </div>
            <div>
                <input type="password" placeholder="password" />
            </div>

            <button onClick={goBack}>Login</button>
        </div>
    );
}
