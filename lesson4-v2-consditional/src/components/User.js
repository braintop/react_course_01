import React, { useState } from "react";

export default function User() {
    const fakeUser = {
        email: "e@e.com",
        password: "1234567",
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validate, setValidate] = useState(false);

    function handleSubmit(event) {
        if (validate) {
            if (fakeUser.email === email) {
                alert("logge in");
            } else {
                alert("not logged in");
            }
        } else {
            alert("what .......");
        }
    }

    function handleEmail(event) {
        console.log(event.target.value);
        setEmail(event.target.value);
    }
    function handlePassword(event) {
        console.log(event.target.value);
        const newPassword = event.target.value;
        if (newPassword.length > 6) {
            setValidate(true);
        } else {
            setValidate(false);
        }
        setPassword(event.target.value);
    }
    const messagePawword =
        password.length > 6 ? (
            <p></p>
        ) : (
            <p style={{ color: "red", fontSize: "8px" }}>
                password must be at list 6 chatacters
            </p>
        );
    const messageEmail =
        email.length > 6 ? (
            <p></p>
        ) : (
            <p style={{ color: "red", fontSize: "8px" }}>
                email must be at list 6 chatacters
            </p>
        );

    return (
        <div>
            <div>
                <div>
                    <input
                        type="text"
                        onChange={handleEmail}
                        placeholder="email"
                    />
                    {messageEmail}
                </div>
                <div>
                    <input
                        type="password"
                        onChange={handlePassword}
                        placeholder="password"
                    />
                    {messagePawword}
                </div>
                <button onClick={handleSubmit}>login</button>
            </div>
        </div>
    );
}
