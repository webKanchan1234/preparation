import React, { useContext } from 'react'
import { createContext } from './createContext'

const Component4 = () => {
    const name = useContext(createContext)
  return (
    <div>Name is coming from component1 through useContext {name}</div>
  )
}

export default Component4