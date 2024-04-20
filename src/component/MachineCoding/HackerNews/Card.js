import React from 'react'

const Card = ({ title, by,url,time }) => {
    // const news_res={
    //     "title":"title",
    //     "by": "by",
    //     "time": 16325,
    //     "url": "https://example.com/",
    //     "id": "12345",
    // }
  return (
    <div className='card'>
        <p>{title}</p>
        <p>By: {by} </p>
        <a href={url}>{url}</a>
        <p>Time: {new Date(time*1000).toLocaleString()}</p>
    </div>
  )
}

export default Card