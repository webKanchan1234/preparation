import React from 'react'

export const Card = (props) => {
  return (
    <div  className="card">
        <div className="img">
            <img src="https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=" alt="" />
        </div>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
    </div>
  )
}
