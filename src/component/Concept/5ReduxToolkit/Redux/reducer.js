import { FETCH_FAIL, FETCH_REQUEST, FETCH_SUCCESS } from "./constant"


const initialState={
    posts:[]
}

const postReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_REQUEST:
            return{
                // ...state,
                loading:true,
                posts:[]
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                loading:false,
                posts:action.payload.posts
            }
        case FETCH_FAIL:
            return{
                // ...state,
                loading:false,
                posts:[],
                error:action.error
            }
        default:
            return state
    }
}

export default postReducer