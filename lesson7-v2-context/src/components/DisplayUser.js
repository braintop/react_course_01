import React, { useContext } from "react";
import UserContext from "../context/UserContetx";

export default function DisplayUser() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <p>name:{user.name} </p>
            <p>email:{user.email} </p>
            <p>age: {user.age}</p>
            {console.log("C")}
        </div>
    );
}
