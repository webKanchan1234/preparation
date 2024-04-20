import React, { useState } from 'react'

const UseCustomState = (initialValue=0,val) => {
    const [value, setValue] = useState(initialValue)

    const increaseValue = ()=>{
        setValue(prevVal=>prevVal+val)
    }
    const decreaseValue = ()=>{
        setValue(prevVal=>prevVal-val)
    }
    const resetValue = ()=>{
        setValue(0)
    }

  return [value,increaseValue,decreaseValue,resetValue]
}

export default UseCustomState