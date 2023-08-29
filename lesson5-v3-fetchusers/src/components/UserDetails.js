import React from "react";

export default function UserDetails({ user }) {
    return (
        <div>
            <h2>User details</h2>
            {user ? (
                <div>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </div>
            ) : (
                <p>select a user to view </p>
            )}
        </div>
    );
}
