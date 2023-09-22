import React, { useEffect, useState } from "react";
import "./Photos.css";
let URL = "https://jsonplaceholder.typicode.com/photos";
export default function Phostos({ onSelectPhoto }) {
    //phase 1 - state vars, let ....
    const [photos, setPhotos] = useState([]);
    //phase 2  effect
    useEffect(() => {
        //get all photos
        fetch(`${URL}?_limit=20`)
            .then((response) => {
                //console.log(response);
                if (!response.ok) {
                    throw new Error("faild retrieve photos");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setPhotos(data);
            })
            .catch((error) => {
                console.error("Error is ", error);
            });
    }, []);

    //phase 3 - function
    function handleSelectedPhoto(photo) {
        onSelectPhoto(photo);
    }
    const allPhotos = photos.map((photo) => {
        return (
            <div
                key={photo.id}
                onClick={() => handleSelectedPhoto(photo)}
                style={{ margin: "10px" }}
            >
                <img
                    src={photo.thumbnailUrl}
                    style={{ width: "200px", height: "200px" }}
                    alt={photo.title}
                />
            </div>
        );
    });
    //phase 4 - return jsx
    return (
        <div>
            Photos
            <div className="imgContainer">{allPhotos}</div>
        </div>
    );
}
