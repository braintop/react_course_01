import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Component3() {
    const value = useContext(UserContext);

    return (
        <div className="border">
            component3
            <p>{value}</p>
        </div>
    );
}
