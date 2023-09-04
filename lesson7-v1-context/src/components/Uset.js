import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Uset() {
    const { name, setName } = useContext(UserContext);

    return (
        <div>
            <input type="text" placeholder={name} />
        </div>
    );
}
