import React, { useEffect, useState } from 'react'

const Result = ({answer,data}) => {
    const [flag, setFlag] = useState(false)

    useEffect(() => {
      if(data.length==answer){
        setFlag(true)
      }
    }, [answer])
    
  return (
    <div>
        <h2>Results</h2>
        {flag ? <p style={{fontWeight:"bold",textAlign:"center"}}>You answered {answer} out of {data.length} questions </p> : ""}
    </div>
  )
}

export default Result