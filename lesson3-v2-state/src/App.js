import "./App.css";
import A from "./Components/ A";
import Counter from "./Components/Counter";
import Letter from "./Components/Letter";

const letters = [
    {
        char: "A",
        nums: 3,
    },
    {
        char: "b",
        nums: 4,
    },
    {
        char: "Z",
        nums: 2,
    },
];
function App() {
    const myletters = letters.map((item) => {
        return (
            <div>
                <Letter letter={item} />
            </div>
        );
    });
    return (
        <div className="App">
            <div className="counter">
                <Counter />
            </div>
            <A />
            {/* <Letter letter={letters[0]} /> */}
            {myletters}
        </div>
    );
}

export default App;
