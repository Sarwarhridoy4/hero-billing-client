import React, { useState } from 'react';


const Button = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [text, setText] = useState("Click Me!");

    function handleClick() {
        setIsLoading(true);
        setText("Generating");
        let count = 0;
        const interval = setInterval(() => {
            count++;
            setText(`Generating${'.'.repeat(count)}`);
            if (count === 3) {
                count = 0;
            }
        }, 800);

        setTimeout(() => {
            clearInterval(interval);
            setIsLoading(false);
            setText("Click Me!");
        },3000)
    }

    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${isLoading ? 'cursor-not-allowed' : ''}`}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default Button;
