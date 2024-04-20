import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/products").then(response => response.json()).then(data => {
            setProducts(data.products.slice(0, 5)) // Show
            // console.log(data)
        })
    },[])

  return (
    <div>
        {/* <h2>BreadCrumbs </h2> */}
        <div className="breadcrumb">
            {
                products.map((prod)=>{
                    return(
                        <Link to={`products/${prod.id}`} className="card" key={prod.id}>
                            <div className="img"><img src={prod.thumbnail} alt="" /></div>
                            <p>{prod.brand}</p>
                        </Link>
                    )
                })
            }
        </div>
        <Link className='btn-views' to={"/products"}>View All Products</Link>
    </div>
  )
}

export default Home