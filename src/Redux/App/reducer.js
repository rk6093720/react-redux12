import * as types from "../actionTypes";
import { loadData,saveData } from "../../utils/localStorage";
 const initialState={
   todos:loadData("todo") || [],
   isLoading:false,
   isError:false,
 }



const reducer= (state = initialState, action) => {
    const {type,payload}=action;
    switch (type) {
        case types.GET_TODO_LIST_REQUEST:
            
        return{
            ...state,
            isLoading:true,
            isError:false,
            }
        case types.GET_TODO_LIST_SUCCESS:
            let newTodo= payload;
            saveData("todos",newTodo)
                return{
                      ...state,
                      todos:newTodo,
                      isLoading:false,
                      isError:false,

                }
        case types.GET_TODO_LIST_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
            case types.ADD_TODO_REQUEST:
                return{
                    ...state,
                    isLoading:true,
                    isError:false,
                    }
                case types.ADD_TODO_SUCCESS:
                    let newTodos=[...state.todos, payload]
                    saveData("todos",newTodos)
                        return{
                              ...state,
                              todos:newTodos,
                              isLoading:false,
                              isError:false,
        
                        }
                case types.ADD_TODO_FAILURE:
                    return{
                        ...state,
                        isLoading:false,
                        isError:true,
                    }
                    case types.TOGGLE_TODO_REQUEST:
                return{
                    ...state,
                    isLoading:true,
                    isError:false,
                    }
                case types.TOGGLE_TODO_SUCCESS:
                    let newToggleTodos=state.todos.map((item) => item.id === payload.id ? payload: item );
                    saveData("newToggleTodos",newToggleTodos)
                        return{
                              ...state,
                              todos:newToggleTodos,
                              isLoading:false,
                               isError:false,
        
                        }
                case types.TOGGLE_TODO_FAILURE:
                    return{
                        ...state,
                        isLoading:false,
                        isError:true,
                    }
                    case types.DELETE_TODO_REQUEST:
                        return{
                            ...state,
                            isLoading:true,
                            isError:false,
                            }
                        case types.DELETE_TODO_SUCCESS:
                            let leftTodos=state.todos.filter((item) => item.id !== payload )
                            saveData("leftTodos",leftTodos)
                                return{
                                      ...state,
                                      todos:leftTodos,
                                      isLoading:false,
                                      isError:true,
                
                                }
                        case types.DELETE_TODO_FAILURE:
                            return{
                                ...state,
                                isLoading:false,
                                isError:true,
                            }
                            case types.UPDATE_TODO_REQUEST:
                                return{
                                    ...state,
                                    isLoading:true,
                                    isError:false,
                                    }
                                case types.UPDATE_TODO_SUCCESS:
                                    let newTodoUpdate=[...state.todos, payload];
                                    saveData("newTodoUpdate",newTodoUpdate)
                                        return{
                                              ...state,
                                              todos:newTodoUpdate,
                                              isLoading:false,
                                              isError:false,
                        
                                        }
                                case types.UPDATE_TODO_FAILURE:
                                    return{
                                        ...state,
                                        isLoading:false,
                                        isError:true,
                                    }
        default:
            return state
    }
}


export { reducer}