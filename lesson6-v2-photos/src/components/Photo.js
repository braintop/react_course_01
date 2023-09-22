import React from "react";
import "./Photo.css";
export default function Photo({ photo }) {
    return (
        <div className="photo">
            {photo ? (
                <div>
                    <h1>Photo Details</h1>
                    <img
                        src={photo.thumbnailUrl}
                        alt={photo}
                        style={{ width: "30px", height: "30px" }}
                    />
                    <p>{photo.id}</p>
                    <p>{photo.title}</p>
                </div>
            ) : (
                <p>Please select photo to view</p>
            )}
        </div>
    );
}
