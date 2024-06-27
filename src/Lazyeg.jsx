// Lazyeg.js
import React, { useState } from 'react';

function Lazyeg() {
    const [showDelayedText, setShowDelayedText] = useState(false);

    const delay = async (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const handleClick = async () => {
        // Increase the delay to make it slower (e.g., 5000 milliseconds)
        await delay(5000);
        setShowDelayedText(true);
    };
    

    return (
        <div className="container">
            <h1 className="heading">Geeksforgeeks</h1>
            <p className="initialText">This is the initial text.</p>
            <button className="button" onClick={handleClick}>
                Show Delayed Text
            </button>
            {showDelayedText && (
                <p className="delayedText">
                    This text appears after a delay using async/await.
                </p>
            )}
        </div>
    );
}

export default Lazyeg;
