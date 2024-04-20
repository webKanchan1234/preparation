import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HOC from './HOC'

const Todos = ({data}) => {
    // const [todos, setTodos] = useState([])
    // const [search, setSearch] = useState("")

    // useEffect(() => {
    //   axios.get("https://dummyjson.com/todos").then(res=>{
    //     setTodos(res.data.todos)
    //   })
    // }, [])

    // const filterData=todos.filter(({todo})=>{
    //     return todo.indexOf(search) >=0
    // })
    
  return (
    <div>
        {/* <h3>Todos Lists</h3>
        <input type="text" placeholder='search todo' onChange={(e)=>setSearch(e.target.value)} /> */}
        {
            data.map((data)=>{
                return <p>{data.name}</p>
            })
        }
    </div>
  )
}
const SearchStudents = HOC(Todos,"students")
export default SearchStudents