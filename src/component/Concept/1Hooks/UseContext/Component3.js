import React from 'react'
import { createContext } from './createContext'
import { createContext1 } from './createContext'
// import createContext1 from "./createContext"

const Component3 = () => {
    return (
        <div>
            <createContext.Consumer>
                {
                    name => {
                        return (
                            <createContext1.Consumer>
                                {
                                    kumar => {
                                       return  <p>Name is coming from component1 through nested context {name} {kumar}</p>
                                    }
                                }
                            </createContext1.Consumer>
                        )
                    }
                }
            </createContext.Consumer>
        </div>
    )
}

export default Component3