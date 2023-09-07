import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function UserForm() {
    const { user, setUser } = useContext(UserContext);

    function onEmailChange(e) {
        setUser({ ...user, email: e.target.value });
    }
    function onNameChange(e) {
        setUser({ ...user, name: e.target.value });
    }
    function onAgeChange(e) {
        setUser({ ...user, age: e.target.value });
    }

    return (
        <div>
            <input onChange={onNameChange} type="text" />
            <input type="text" onChange={onEmailChange} />
            <input onChange={onAgeChange} type="text" />
        </div>
    );
}
