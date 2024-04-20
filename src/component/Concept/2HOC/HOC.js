import axios from 'axios'
import React, { useEffect, useState } from 'react'

const HOC = (WrapperComponent, entity ) => {
    const HocComponent=()=>{
        const [search, setSearch] = useState("")
        const [fetchData, setFetchData] = useState([])

        useEffect(() => {
            axios.get(`https://freetestapi.com/api/v1/${entity}`).then((res) => {
                console.log(res.data)
                // if(entity==="users"){
                //     fetchData(res.data.users)
                // }
                // if(entity==="todos"){
                //     fetchData(res.data.todos)
                // }
                setFetchData(res.data)
            })
        }, [])

        const filterData = fetchData.filter((d)=>{
         
            if(entity==="mobiles"){
                const {brand} = d
                return brand.toLowerCase().indexOf(search.toLowerCase()) >=0
            }
            if(entity==="students"){
                const {name}=d
                return name.toLowerCase().indexOf(search.toLowerCase()) >=0
            }
        })
        return (
            <div>
                <h3>{entity} HOC </h3>
                <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                <WrapperComponent data={filterData}></WrapperComponent>
            </div>
        )
    }

    return HocComponent
    
}

export default HOC