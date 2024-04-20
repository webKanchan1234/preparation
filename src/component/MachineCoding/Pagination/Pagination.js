import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./pagination.css"

const Pagination = () => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const fetchData = () => {
        axios.get("https://dummyjson.com/products").then(res => {
            setProducts(res.data.products)
            // console.log(res.data.products)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handlePage = (v) =>{
        // console.log(v)
        setPage(v)
    }

    const next = ()=>{
        if(page < products.length/page)
        setPage(prev=>prev+1)
    }
    const prev = ()=>{
        if(page>1)
        setPage(prev=>prev-1)
    }

    return (
        <>
        <div className='pagination'>
            {
                products.slice(page*5,page*5+5).map((v) => {
                    return (
                        <div className="card">
                            <div className="images"><img src={v.images[0]} alt="" /></div>
                            <h3>{v.brand}</h3>
                        </div>
                    )
                })
            }
            
        </div>
        <div style={{margin:"auto", width:"40%"}}>
        <button onClick={prev} className='btn-page'>prev</button>
        {
            [1,2,3,4,5,6,7,8].map((v) => {
                return(
                    <>
                    
                    <button className='btn-page' onClick={()=>handlePage(v)}>{v}</button>
                    
                    </>
                )
            })
        }
        <button onClick={next} className='btn-page'>next</button>
        </div>
        
        
        </>
    )
}

export default Pagination