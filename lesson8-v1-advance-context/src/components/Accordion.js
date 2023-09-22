import React, { useState } from "react";

export default function Accordion({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleAccordion}>{isOpen ? "-" : "+"}</button>
            {isOpen && <div>{children}</div>}
        </div>
    );
}
