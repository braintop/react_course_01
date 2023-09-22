import React from "react";
import styles from "./Register.module.css"; // Import css modules stylesheet as styles
import { Link } from "react-router-dom";
import { db } from "../../services/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { showNotification } from "../../utils/notifications";
import FirebaseAuthService from "../../services/FirebaseAuthService";

export default function Register() {
    const usersRef = collection(db, "users");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    function onFirstNameChange(e) {
        console.log(e.target.value);
        e.preventDefault();
        setFirstName(e.target.value);
    }
    function onEmailChange(e) {
        console.log(e.target.value);
        e.preventDefault();
        setEmail(e.target.value);
    }
    function onPasswordChange(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }
    async function createUser(event) {
        event.preventDefault();
        try {
            await FirebaseAuthService.registerUser(email, password, firstName);
            setEmail("");
            setFirstName("");
            setPassword("");
            showNotification("success", email + " authenticate success");
        } catch (err) {
            showNotification("error", err.message);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Create An Account</div>
            <p>Welcome! Register for an account</p>
            <div className={styles.inputs}>
                <input
                    type="text"
                    className={styles.inputText}
                    placeholder="firstname"
                    onChange={(e) => onFirstNameChange(e)}
                />
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
                <button className={styles.btnRegister} onClick={createUser}>
                    Register
                </button>
            </div>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
}
