import React, { useReducer } from 'react'
import Counter2 from './Counter2';
import Counter3 from './Counter3';
import FetchData from './FetchData';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "Increase":
            return state + 1
        case "Decrease":
            return state - 1
        case "Reset":
            return initialState
        default:
            return state
    }
}

const Counter1 = () => {
    const  [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h4>useReducer use by taking intitialValue as variable</h4>
            <h4>Count: {count}</h4>
            <button onClick={() => dispatch("Increase")}>Increase</button>
            <button onClick={() => dispatch("Decrease")}>Decrease</button>
            <button onClick={() => dispatch("Reset")}>Reset</button>
            <br/> <br/>
            <Counter2/>
            <br/> <br/>
            <Counter3/>
            <FetchData/>
        </div>
    )
}

export default Counter1