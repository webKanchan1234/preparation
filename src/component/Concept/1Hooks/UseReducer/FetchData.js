import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'


const initialState = {
    loading: true,
    error: "",
    details: {}
}

const reducer = (initialState, action) => {

    switch (action.type) {
        case "FETCH-SUCCESS":
            return {
                loading: false,
                error: "",
                details: action.payload
            }
        case "FAIL":
            return {
                loading: true,
                error: "Something went wrong",
                details: {}
            }
        default:
            return initialState
    }
}

const FetchData = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [loading, setLoading] = useState(false)
    const [details, setDetails] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get("https://dummyjson.com/products/1").then(res => {
            //   console.log(res.data)
            //   setError("")
            //   setLoading(false)
            //   setDetails(res.data)
            dispatch({ type: "FETCH-SUCCESS", payload: res.data })

        }).catch(err => {
            //   setError("Somthing went wrong")
            //   setLoading(true)
            //   setDetails({})
            dispatch({ type: "FAIL" })
        })
    }, [])

    //   console.log(details.description)
    return (


        <div>
            <h4>Fetching Details through axios api</h4>
            {
                state.loading ? <p>Loading...</p> : <p>{state.details.description}</p>
            }
            {state.error ? state.error : null}

        </div>
    )
}

export default FetchData