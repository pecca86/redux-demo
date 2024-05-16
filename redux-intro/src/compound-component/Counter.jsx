import { createContext, useState, useContext } from "react";

// Compound component recipe:

// 1. Create a context to hold the state
const CounterContext = createContext();

// 2. Create a provider component to wrap the compound components

const Counter = ({ children }) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);


    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            <span>{children}</span>
        </CounterContext.Provider>
    );
}

// 3. Create the compound components
const Count = () => {
    const { count } = useContext(CounterContext);
    return <span>{count}</span>;
};

const Label = ({ children }) => {
    return <span>{children}</span>;
};

const IncrementButton = () => {
    const { increment } = useContext(CounterContext);
    return <button onClick={increment}>Increment +</button>;
};

const DecrementButton = () => {
    const { decrement } = useContext(CounterContext);
    return <button onClick={decrement}>Decrement -</button>;
};

// 4. Add children to the provider component
Counter.Count = Count;
Counter.Label = Label;
Counter.IncrementButton = IncrementButton;
Counter.DecrementButton = DecrementButton;

export default Counter;
