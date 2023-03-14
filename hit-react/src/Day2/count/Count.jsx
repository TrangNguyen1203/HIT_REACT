import React, { useState } from "react";

const Counter = (props) =>
{
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount((pre) => pre + 1);
        setCount((pre) => pre + 1);
        setCount((pre) => pre + 1);
        setCount((pre) => pre + 1);
        setCount((pre) => pre + 1);
    }
    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={handleCount}>Click me!</button>
        </div>
    )
}

export default Counter;