import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Component3() {
    const { name, setName } = useContext(UserContext);

    return (
        <div>
            Component3
            <p>{name}</p>
        </div>
    );
}
