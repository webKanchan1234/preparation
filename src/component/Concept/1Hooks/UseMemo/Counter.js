import React, { useMemo } from 'react'
import { useState } from 'react'

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(5)

    const increaseOne = ()=>{
        setCounterOne(counterOne+1)
    }

    const increaseTwo = () =>{
        setCounterTwo(counterTwo+1)
    }

    const isEven = useMemo(()=>{
        let i=0;
        while(i<2000000000)i++
        return counterOne%2===0
    },[counterOne])

  return (
    <div >
        <button onClick={increaseOne}>Count {counterOne} </button> <br/>
        <button onClick={increaseTwo}>Count {counterTwo}</button>
        <span>{isEven ? "Even" :"Odd"}</span>
    </div>
  )
}

export default Counter