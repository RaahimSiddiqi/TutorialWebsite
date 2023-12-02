import { useState } from "react";
import { Button } from "./ui/button";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const decrementCounter = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };

    return (
        <div className="flex w-12 py-4">
            <Button data-testid="increment" onClick={incrementCounter}>
                +
            </Button>
            <p className="text-center m-auto p-2" data-testid="counter">{counter}</p>
            <Button data-testid="decrement" onClick={decrementCounter}>
                -
            </Button>
        </div>
    );
};

export default Counter;