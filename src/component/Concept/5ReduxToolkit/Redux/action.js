import axios from "axios"
import { FETCH_FAIL, FETCH_REQUEST, FETCH_SUCCESS } from "./constant"


export const getPosts = () => async (dispatch) => {

    try {
        dispatch({
            type: FETCH_REQUEST
        })
        const { data } = await axios.get("https://dummyjson.com/posts")
        // console.log(data.posts)
        dispatch({
            type: FETCH_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FETCH_FAIL,
            payload: error.response.data.message
        })
    }
}