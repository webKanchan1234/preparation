import React from 'react'

const Buttom = ({handleClick,children}) => {
    console.log("Rendering buttom",children)
  return (
    <div>
        <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default Buttom