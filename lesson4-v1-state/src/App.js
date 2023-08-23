import "./App.css";
import Counter from "./components/Counter";
import A from "./components/A";
import Letter from "./components/Letter";
const letters = [
    {
        char: "A",
        nums: 2,
    },
    {
        char: "B",
        nums: 2,
    },
    {
        char: "C",
        nums: 5,
    },
];
function App() {
    const myLetter = letters.map((l) => {
        return <Letter letter={l} />;
    });

    return (
        <div className="App">
            <h1>My Counter</h1>
            <Counter />
            {/* <A /> */}
            {/* <Letter letter={letters[0]} />
            <Letter letter={letters[1]} />
            <Letter letter={letters[2]} /> */}

            {letters.map((l) => {
                return <Letter letter={l} />;
            })}

            {myLetter}
        </div>
    );
}

export default App;
