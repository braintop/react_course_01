import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Component3 from "./Component3";

export default function Component2() {
    const value = useContext(UserContext);
    return (
        <div className="border">
            component2
            <p>{value}</p>
            <Component3 />
        </div>
    );
}
