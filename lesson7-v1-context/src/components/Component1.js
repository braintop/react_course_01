import { useContext } from "react";
import Component2 from "./Component2";
import UserContext from "../context/UserContext";
export default function Component1() {
    const { name, setName } = useContext(UserContext);
    console.log(name);
    return (
        <div>
            Component1
            <button
                onClick={() => {
                    setName("avi");
                }}
            >
                change to avi
            </button>
            <Component2 />
        </div>
    );
}
