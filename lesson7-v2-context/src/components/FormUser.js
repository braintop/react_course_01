import React, { useContext } from "react";
import UserContext from "../context/UserContetx";

export default function FormUser() {
    const { user, setUser } = useContext(UserContext);
    function handleChangeEmail(e) {
        const newUser = { user, email: e.target.value };
        // const newUser = { name:user.name,age:user.age, email: e.target.value };
        setUser(newUser);
    }
    function handleChangeName(e) {
        const newUser = { user, name: e.target.value };
        setUser(newUser);
    }
    function handleChangeAge(e) {
        const newUser = { user, age: e.target.value };
        setUser(newUser);
    }

    return (
        <div>
            <input
                type="text"
                onChange={handleChangeEmail}
                placeholder="email"
            />
            <input type="text" onChange={handleChangeName} placeholder="name" />
            <input type="text" onChange={handleChangeAge} placeholder="age" />
            {console.log("D")}
        </div>
    );
}
