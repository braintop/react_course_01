import React, { useState } from "react";
import styles from "./Register.module.css";
import FirebaseAuthService from "../../services/FirebaseAuthService";
import { showNotification } from "../../util/notification";
import Header from "../Header/Header";
export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onFirstNameChange(event) {
        setFirstName(event.target.value);
    }
    function onEmailChange(event) {
        setEmail(event.target.value);
    }
    function onPasswordChange(event) {
        setPassword(event.target.value);
    }
    async function createUser(event) {
        event.preventDefault();
        try {
            await FirebaseAuthService.registerUser(email, password, firstName);
            setEmail("");
            setPassword("");
            setFirstName("");
            showNotification("success", email + " authenticate success");
        } catch (error) {
            showNotification("error", error.message);
            //alert(error.message);
        }
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>Create an account</div>
                <p>Welcome to register</p>
                <div className={styles.inputs}>
                    <input
                        type="text"
                        className={styles.inputText}
                        placeholder="firstname"
                        onChange={(e) => onFirstNameChange(e)}
                    />
                    <input
                        type="text"
                        className={styles.inputText}
                        placeholder="email"
                        onChange={(e) => onEmailChange(e)}
                    />
                    <input
                        className={styles.inputText}
                        type="text"
                        placeholder="password"
                        onChange={(e) => onPasswordChange(e)}
                    />
                    <button onClick={createUser} className={styles.btnRegister}>
                        register
                    </button>
                </div>
                <p>
                    Already have account ? <span>link to login </span>
                </p>
            </div>
        </>
    );
}
