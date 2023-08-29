import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
function App() {
    //phase 1 - declare states, const, let ....
    const [show, setShow] = useState(false);
    //phase 2 - declare - effects and  more hooks

    //phase 3 - declare functions ...
    function toggle() {
        setShow((prev) => !prev);

        //setX(newX);
        //setX((last)=>last*5)
        // setX((last)=>{
        //   return  last*5
        // }
    }

    //phase 4 - return jsx
    return (
        <div className="App">
            hello useEffect
            <p
                style={{
                    border: "1px solid red",
                    width: "100px",
                    margin: "auto",
                    marginTop: "10px",
                    padding: "20px",
                }}
            >
                <button style={{ color: "red" }} onClick={toggle}>
                    toogle
                </button>
            </p>
            {show && <Counter />}
        </div>
    );
}

export default App;
