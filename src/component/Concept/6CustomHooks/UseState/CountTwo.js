import React, { useState } from 'react'
import UseCustomState from './UseCustomState'

const CountTwo = () => {
    const [value,increaseValue,decreaseValue,resetValue] = UseCustomState(10,10)
    // const [value, setValue] = useState(0)

    // const increaseValue = ()=>{
    //     setValue(prevVal=>prevVal+1)
    // }
    // const decreaseValue = ()=>{
    //     setValue(prevVal=>prevVal-1)
    // }
    // const resetValue = ()=>{
    //     setValue(0)
    // }

  return (
    <div>
        <h3>Count: {value}</h3>
        <button onClick={increaseValue}>Increase</button>
        <button onClick={decreaseValue}>Decrease</button>
        <button onClick={resetValue}>Reset</button>
    </div>
  )
}

export default CountTwo