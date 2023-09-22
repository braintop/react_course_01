import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Component2 from "./Component2";

export default function Component1() {
    const name = useContext(UserContext);
    return (
        <div className="border">
            component1
            <p>{name}</p>
            <Component2 />
        </div>
    );
}
