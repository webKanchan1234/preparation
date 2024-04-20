import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HOC from './HOC'

const UserList = ({data}) => {
    // const [users, setUsers] = useState([])
    // const [search, setSearch] = useState("")

    // useEffect(() => {
    //   axios.get("https://dummyjson.com/users").then((res)=>{
    //     console.log(res.data.users)
    //     setUsers(res.data.users)
    //   })
    // }, [])

    // const filterData = 
    //     users.filter(({firstName})=>{
    //         return firstName.indexOf(search) >=0
    //     })
    
    
  return (
    <div>
        {/* <h3>Users Lists</h3> */}
        {/* <input type="text" placeholder='Search name' onChange={(e)=>setSearch(e.target.value)} /> */}
        {
            data.map((data)=>{
                return <p>{data.brand}</p>
            })
        }
    </div>
  )
}

const SearchUsers = HOC(UserList,"mobiles")

export default SearchUsers