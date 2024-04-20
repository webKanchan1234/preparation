import React, { useState } from 'react'

const UseState = () => {
    // const [count, setCount] = useState(0)
    const arr=useState(5)
    const count=arr[0]
    const setCount=arr[1]

  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase count</button>
    </div>
  )
}

export default UseState