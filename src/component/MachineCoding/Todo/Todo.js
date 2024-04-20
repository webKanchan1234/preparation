import React, { useState } from 'react'
import "./todo.css"

const Todo = () => {
    const [lists, setLists] = useState([])
    const [add, setadd] = useState("")

    const addTodo = () =>{
        if(add!=="")
        setLists([...lists,add])
        setadd("")
    }

    const deleteList=id=>()=>{
        // console.log(id)
        setLists(lists.filter(v=>{
            return v!==id
         }))
    }


  return (
    <div className='todo-container'>
        <div className='todo-box'>
            <h3>Todo Lists</h3>
            <div className='input'>
                <input type="text" name="" id="" value={add} onChange={(e)=>setadd(e.target.value)} />
                <button onClick={addTodo}>Add</button>
            </div>
            {
                lists.map((v,idx)=>{
                    return (
                        <div className='list'>
                            <h4>{v} </h4>
                            <span onClick={deleteList(v)}>X</span>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Todo