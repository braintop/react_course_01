import React from "react";
import styles from "./Login.module.css"; // Import css modules stylesheet as styles
import { Link } from "react-router-dom";
import { db } from "../../services/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { showNotification } from "../../utils/notifications";
import FirebaseAuthService from "../../services/FirebaseAuthService";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    function onEmailChange(e) {
        console.log(e.target.value);
        e.preventDefault();
        setEmail(e.target.value);
    }
    function onPasswordChange(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }
    async function loginUser(event) {
        event.preventDefault();
        try {
            await FirebaseAuthService.loginUser(email, password);
            setEmail("");
            setPassword("");
            showNotification("success", email + " authenticate success");
            navigate("/");
        } catch (err) {
            showNotification("error", err.message);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Login</div>
            <p>Welcome! Please Login</p>
            <div className={styles.inputs}>
                <input
                    type="email"
                    className={styles.inputText}
                    placeholder="email"
                    onChange={(e) => onEmailChange(e)}
                />
                <input
                    type="password"
                    className={styles.inputText}
                    placeholder="password"
                    onChange={(e) => onPasswordChange(e)}
                />
                <button className={styles.btnRegister} onClick={loginUser}>
                    Login
                </button>
            </div>
            <div>
                <p>
                    Forgot password?{" "}
                    <Link to="/resetPassword">Forgot password</Link>
                </p>
                <p>
                    Doesn't have account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
}
