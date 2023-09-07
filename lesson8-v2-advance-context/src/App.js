import "./App.css";
import CountryProvider from "./context/FlagContext";
import Counries from "./component/Counries";

function App() {
    return (
        <div className="App">
            <CountryProvider>
                {/* countries is children  */}
                <Counries />
            </CountryProvider>
        </div>
    );
}

export default App;
