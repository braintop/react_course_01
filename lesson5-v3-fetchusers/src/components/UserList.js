import React, { useEffect, useState } from "react";
import "./UserList.css";
export default function UserList({ onSelectUser }) {
    //phase 1 - const, useState, useEffects
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //get all users
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("error happend");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
            .catch((error) => console.error("Error fetching users", error));
    }, []);
    //phase 2 - functions
    function handleSelectedUser(user) {
        alert("selected user" + user.name);
        onSelectUser(user); //onSelectUser pass as props
    }
    const displayUsers = users.map((user) => {
        return (
            <div
                onClick={() => handleSelectedUser(user)}
                key={user.id}
                className="user"
            >
                <p>{user.name}</p>:<p>{user.email}</p>
            </div>
        );
    });
    return (
        <div>
            <h1>All Users</h1>
            {displayUsers}
        </div>
    );
}
