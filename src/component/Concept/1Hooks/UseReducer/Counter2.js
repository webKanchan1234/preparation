import React, { useReducer } from 'react'

const initialValue = {
    firstValue:0
}

const reducer = (state,action)=>{
    switch(action.type){
        case "increase":
            return{
                firstValue:state.firstValue + action.value
            }
        case "decrease":
            return{
                firstValue:state.firstValue - action.value
            }
        case "reset":
            return initialValue
        default:
            return state
    }
}

const Counter2 = () => {
    const [count,dispatch] = useReducer(reducer,initialValue);
  return (
    <div>
        <h4>useReducer use by taking initialValue as object</h4>
        <p>Count: {count.firstValue}</p>
        <button onClick={()=>dispatch({type:"increase",value:5})}>Increase by 5</button>
        <button onClick={()=>dispatch({type:"decrease",value:5})}>Decrease by 5</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default Counter2