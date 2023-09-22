import "./App.css";
import Phostos from "./components/Photos";
import Photo from "./components/Photo";
import { useState } from "react";

function App() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    function handleSelectedPhoto(photo) {
        setSelectedPhoto(photo);
    }
    return (
        <div className="App">
            <h1>My Photos</h1>
            <div className="container">
                <Phostos onSelectPhoto={handleSelectedPhoto} />

                <Photo photo={selectedPhoto} />
            </div>
        </div>
    );
}

export default App;
