import React from 'react';
import Counter from './Counter';

const CounterApp = () => {
    return (
        <div>
            <Counter>
                <Counter.Label>Count: </Counter.Label>
                <Counter.IncrementButton />
                <Counter.Count />
                <Counter.DecrementButton />
            </Counter>
        </div>
    );
}

export default CounterApp;
