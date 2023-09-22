import React, { useState } from "react";
import "./Accordion.css";
export default function Accordion({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    function toggleAccordion() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button onClick={toggleAccordion}>
                {isOpen ? "Collapse" : "Expand"}
            </button>
            {isOpen && <div>{children}</div>}
        </div>
    );
}
