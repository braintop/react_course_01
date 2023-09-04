import { useContext } from "react";
import Component3 from "./Component3";
import UserContext from "../context/UserContext";

export default function Component2() {
    const { name } = useContext(UserContext);

    return (
        <div>
            <p>Component2</p>
            <p>{name}</p>
            <Component3 />
        </div>
    );
}
