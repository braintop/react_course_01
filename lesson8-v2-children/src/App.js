import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion";
import FormDetails from "./components/FormDetails";

function App() {
    const questions = [
        {
            question: "1+1",
            solution: "2",
        },
        {
            question: "1+2",
            solution: "3",
        },
        {
            question: "1+3",
            solution: "4",
        },
        {
            question: "1+5",
            solution: "6",
        },
    ];

    return (
        <div className="App">
            <p>hello Accordion</p>
            {questions.map((item, index) => {
                return (
                    <div key={index} className="accordion">
                        <p>{item.question}</p>
                        <Accordion>
                            <p>{item.solution}</p>
                        </Accordion>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
