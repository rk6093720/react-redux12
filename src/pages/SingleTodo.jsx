import axios from 'axios';
import React ,{useState} from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTodoFailure, deleteTodoRequest, deleteTodoSuccess, toggleTodoFailure, toggleTodoRequest, toggleTodoSuccess } from '../Redux/App/action';
import { Link } from 'react-router-dom';
const SingleTodo = () => {
    const todos=useSelector(state => state.reducer.todos);
    const navigate= useNavigate();
    const dispatch=useDispatch();
    const {id} = useParams();
    // const [currentTodo]=useState(()=>{
    //     return todos.find(item => item.id ===Number(id)) || {}
    // });
    const [currentTodo, setCurrentTodo]= useState({})
   
    const toggleStatus=(id,newStatus)=>{
      dispatch(toggleTodoRequest())
      axios
      .patch(`/todos/${id}`, {status:newStatus})
      .then((r)=> dispatch(toggleTodoSuccess(r.data)))
      .catch((e)=> dispatch(toggleTodoFailure(e)))

    };
    const removeTodo=(id)=>{
      dispatch(deleteTodoRequest())
      axios
      .delete(`/todos/${id}`)
      .then((r) =>{
         dispatch(deleteTodoSuccess(id));
         navigate("/")
      })
      .catch((e) => dispatch(deleteTodoFailure(e)))
    }
    useEffect(()=>{
      let currentTodo = todos.find((item) => item.id ===Number(id));
      currentTodo && setCurrentTodo(currentTodo)
    },[todos,id])
    console.log(todos)
  return (
    <div>
        <h3>Single Todo
            {currentTodo?.title}
            {currentTodo?.status ? "True" : "false"}
        </h3>
        <button onClick={()=>toggleStatus(currentTodo.id, !currentTodo.status)}>Toggle</button>
        <button onClick={() => removeTodo(currentTodo.id)}>Delete</button>
        <Link to={`/todo/${currentTodo.id}/edit`}>
          <button >Edit</button>
        </Link>
      
    </div>
  )
}

export default SingleTodo