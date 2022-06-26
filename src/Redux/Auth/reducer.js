
import * as types from "./action";

const initialState = {
    isAuth:false,
    token:"",
    isError:false
}




const reducer = (state = initialState, action) => {
    const {type, paylaod}= action
    switch (type) {
        case types.LOGIN_SUCCESS:
            return {
                isAuth: true,
                token:paylaod,
            
            }
        case types.LOGIN_FAILURE:
            return {
                isAuth:false,
                token:"",
    
            }
        default:
            return state
    }
} 

export { reducer };