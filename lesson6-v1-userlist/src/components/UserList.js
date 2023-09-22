import React, { useEffect, useState } from "react";
import "./UserList.css";
let URL = "https://jsonplaceholder.typicode.com/users";
export default function UserList({ onSelectUser }) {
    //phase 1 - state vars, let ....
    const [users, setUsers] = useState([]);
    //phase 2  effect
    useEffect(() => {
        //get all users
        fetch(URL)
            .then((response) => {
                //console.log(response);
                if (!response.ok) {
                    throw new Error("faild retrieve user");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
            .catch((error) => {
                console.error("Error is ", error);
            });
    }, []);

    //phase 3 - function
    function handleSelectedUser(user) {
        // alert(user.name);
        onSelectUser(user);
    }
    const allUsers = users.map((user) => {
        return (
            <div
                key={user.id}
                onClick={() => handleSelectedUser(user)}
                className="user"
            >
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        );
    });
    //phase 4 - return jsx
    return (
        <div>
            UserList
            {/* <div>{users.length && <p>{users[0].name}</p>}</div> */}
            {allUsers}
        </div>
    );
}
