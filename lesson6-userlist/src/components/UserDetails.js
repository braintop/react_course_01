import React from "react";
//
export default function UserDetails({ user }) {
    return (
        <div>
            <h2>UserDetails</h2>
            {user ? (
                <div>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.username}</p>
                </div>
            ) : (
                <p>select user to view </p>
            )}
        </div>
    );
}
