import React, { useEffect, useState } from 'react'
import useDebounce from './useDebounce'

const Debounce = () => {
    const [searchItem, setSearchItem] = useState("")
    const debounceSearchItem = useDebounce(searchItem, 1000)

    const [products, setProducts] = useState([])

    const fetchData = () => {
        fetch(`https://dummyjson.com/products/search?q=${debounceSearchItem}`).then(res => {
            res.json().then(data => {
                console.log('fetched data', data.products)
                setProducts(data.products)
            })
        })
    }

    useEffect(() => {
        if (debounceSearchItem) {
            console.log(debounceSearchItem)
        } else {
            console.log("no value")
        }
        fetchData()
    }, [debounceSearchItem])


    return (
        <div style={{ margin: "2vmax 1vmax" }}>
            <input type="text" name="" id="" placeholder='Search Items...' onChange={(e) => setSearchItem(e.target.value)} />
            <div className="products">
                {
                    products.map((prod, idx) => {
                        return (
                            <div className="card">
                                <p>{prod.brand}</p>
                                <p>{prod.category}</p>
                                <p>{prod.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Debounce