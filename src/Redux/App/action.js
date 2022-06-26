import * as types from "../actionTypes";


const getTodoListRequest=()=>{
    return {
        type:types.GET_TODO_LIST_REQUEST
    };
}
 const getTodoListSuccess = (payload) =>{
    return {
        type:types.GET_TODO_LIST_SUCCESS, payload 
    };
}
    const getTodoListFailure=()=>{
        return {
            type:types.GET_TODO_LIST_FAILURE
        };
    }
    const addTodoRequest=()=>{
        return {
            type:types.ADD_TODO_REQUEST
        };
    }
     const addTodoSuccess=(payload)=>{
        return { type:types.ADD_TODO_SUCCESS, payload  };
    }
        const addTodoFailure=()=>{
            return {
                type:types.ADD_TODO_FAILURE
            };
        }
        const toggleTodoRequest=()=>{
            return {
                type:types.TOGGLE_TODO_REQUEST
            };
        }
         const toggleTodoSuccess=(payload)=>{
            return { type:types.TOGGLE_TODO_SUCCESS, payload  };
        }
            const toggleTodoFailure=()=>{
                return {
                    type:types.TOGGLE_TODO_FAILURE
                };
            }
     
            const deleteTodoRequest=()=>{
                return {
                    type:types.DELETE_TODO_REQUEST
                };
            }
             const deleteTodoSuccess=(payload)=>{
                return { type:types.DELETE_TODO_SUCCESS, payload  };
            }
                const deleteTodoFailure=()=>{
                    return {
                        type:types.DELETE_TODO_FAILURE
                    };
                }
                const updateTodoRequest=()=>{
                    return {
                        type:types.UPDATE_TODO_REQUEST
                    };
                }
                 const updateTodoSuccess=(payload)=>{
                    return { type:types.UPDATE_TODO_SUCCESS, payload  };
                }
                    const updateTodoFailure=()=>{
                        return {
                            type:types.UPDATE_TODO_FAILURE
                        };
                    }
             


export { 
    getTodoListRequest,
     getTodoListSuccess,
     getTodoListFailure,
    addTodoFailure,
addTodoRequest,
addTodoSuccess,
toggleTodoFailure,
toggleTodoRequest,
toggleTodoSuccess,
deleteTodoFailure,
deleteTodoRequest,
deleteTodoSuccess,
updateTodoFailure,
updateTodoSuccess,
updateTodoRequest
}