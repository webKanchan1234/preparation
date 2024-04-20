import React from 'react'
import Component2 from './Component2'

import { createContext } from './createContext'
import { createContext1 } from './createContext'
import Component3 from './Component3'
import Component4 from './Component4'


const Component1 = () => {

    return (
        <div>
            <h2>props</h2>
            <Component2 name="kanchan" />

            <br />
            <h3>create context</h3>
            {/* in contextr provide value keyword is required if use another like name, user then data is not pass */}
            {/* we can also pass value in nested constext by creating nested different context */}
            <createContext.Provider value={"kanchan"}>
                <createContext1.Provider value={"kumar"}>
                    <Component3 />
                </createContext1.Provider>

            </createContext.Provider>

            <br/>
            <h4>useContext</h4>
            <createContext.Provider value="kanchan">
                <Component4/>
            </createContext.Provider>

        </div>

    )
}

export default Component1




