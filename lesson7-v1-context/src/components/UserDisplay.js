import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function UserDisplay() {
    const { user } = useContext(UserContext);
    const { name, email, age } = user;
    return (
        <div>
            <p>name:{name}</p>
            <p>email:{email}</p>
            <p>age:{age}</p>
        </div>
    );
}
