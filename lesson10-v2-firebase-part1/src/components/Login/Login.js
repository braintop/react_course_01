import React from "react";
import styles from "./Login.module.css"; // Import css modules stylesheet as styles
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { showNotification } from "../../util/notification";
import FirebaseAuthService from "../../services/FirebaseAuthService";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function onEmailChange(e) {
        setEmail(e.target.value);
    }
    function onPasswordChange(e) {
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
                    onChange={onEmailChange}
                />
                <input
                    type="password"
                    className={styles.inputText}
                    placeholder="password"
                    onChange={onPasswordChange}
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
