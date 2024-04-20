import React, { useState } from 'react'
import Child from './Child'
import Buttom from './Buttom'

const Parent = () => {
    const [age, setAge] = useState(20)
    const [salary, setsalary] = useState(1000)

    const increaseAge = ()=>{
      setAge(age+1)
    }
    const increaseSalary = ()=>{
      setsalary(salary+1000)
    }

  return (
    <div>
        <Child count={age}/>
        <Buttom handleClick={increaseAge}>increase</Buttom>
        <Child count={salary}/>
        <Buttom handleClick={increaseSalary}>increase</Buttom>
    </div>
  )
}

export default Parent