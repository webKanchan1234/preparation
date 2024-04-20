import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    }, [])

    const increaseSize = ()=>{
        inputRef.current.style.width="400px"
    }
    
  return (
    <div>
        <input ref={inputRef} type="text" /> <br/>
        <button onClick={increaseSize}>Increase input size</button>
    </div>
  )
}

export default FocusInput