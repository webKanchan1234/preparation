import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    // console.log(id)
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then(res => {
            res.json().then(data => {
                // console.log(data)
                setProduct(data)
            })
        })
    }, [])




    return (
        <>
        {/* <h3>Product Details</h3> */}
            <div className="product-details">
                <div className="product-left">
                    <div className="prod-left-img">
                        <img src={product.thumbnail} alt="" />
                    </div>
                </div>
                <div className="product-right">
                    <h2>{product.title}</h2>
                    <p>{product.brand}</p>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                </div>


            </div>
        </>
    )
}

export default ProductDetails