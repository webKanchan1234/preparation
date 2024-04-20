import React from 'react'

export const Pill = ({image,text,onClick}) => {
  return (
    <div className='pill'>
      <div className="img">
        <img src={image} alt="" />
      </div>
      <p id='text'>{text}</p>
      <button id='text' className='btndele' onClick={onClick}>X</button>
    </div>
  )
}
