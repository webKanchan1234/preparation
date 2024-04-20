import React, { useContext } from 'react'
import { createContext } from './createContext'

const Counter4 = () => {
    const countContext = useContext(createContext)
    return (
        <div>
            <p>Counter4: {countContext.countState}</p>
            <button onClick={() => countContext.countDispatch("increase")}>increase</button>
            <button onClick={() => countContext.countDispatch("decrease")}>decrease</button>
            <button onClick={() => countContext.countDispatch("reset")}>reset</button>
        </div>
    )
}

export default Counter4