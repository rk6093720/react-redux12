import React,{useEffect} from 'react'
import { useDispatch   , useSelector } from 'react-redux'
import { getTodoListFailure, getTodoListRequest, getTodoListSuccess } from '../Redux/App/action';
import AddTodo from './AddTodo';
import axios from 'axios';
import TodoList from "./TodoList";
import { useNavigate } from 'react-router-dom';
// import NotFound from './NotFound';
// import EditTodo from '../pages/EditTodo'; 
const Todos = () => {
  const dispatch=useDispatch();
  const navigate= useNavigate();
  const todos=useSelector((state)=> state.reducer.todos)
  const getTodos=()=>{
    dispatch(getTodoListRequest())
    axios
    .get("/todos")
    .then((r)=> dispatch(getTodoListSuccess(r.data)))
    .catch((e)=> dispatch(getTodoListFailure(e)));

  }
  useEffect(()=>{
    if(todos?.length===0)
    {
    getTodos();
    }
    if(!todos)
    {
      navigate("/NotFound")
    }
   
  },[])
  console.log(todos)
  return (
    <div>
        <h3>Add Todo</h3>
        <AddTodo/>
        
        <TodoList todoList={todos}/>
    </div>
  )
}

export default Todos