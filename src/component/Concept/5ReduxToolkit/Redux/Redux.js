import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from './action'

const Redux = () => {
  const dispatch = useDispatch()
  const {posts} = useSelector(state => state.postReducer)
  // console.log("Redux", posts)
  // const [posts, setPosts] = useState([])


  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div style={{padding:"1vmax"}}>
      {
        posts.map((data, idx) => {
          return (
            <>
              <h2>{data.id}. {data.title}</h2>
              <p style={{marginBottom:"1vmax"}}>{data.body}</p>
            </>
          )
        })
      }
    </div>
  )
}

export default Redux