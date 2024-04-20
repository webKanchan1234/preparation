import React, { useReducer } from 'react'
import Counter4 from './Counter4';
import { createContext } from './createContext';

const initialValue = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increase":
            return state + 1
        case "decrease":
            return state - 1;
        case "reset":
            return initialValue
        default:
            return state
    }
}

const Counter3 = () => {
    const [count, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <h4>useReducer with useContext</h4>
            <p>Count: {count}</p>
            <button onClick={() => dispatch("increase")}>increase</button>
            <button onClick={() => dispatch("decrease")}>decrease</button>
            <button onClick={() => dispatch("reset")}>reset</button>
            <br /> <br />
            <createContext.Provider value={{ countState: count, countDispatch: dispatch }}>
                <Counter4 />
            </createContext.Provider>

        </div>
    )
}

export default Counter3