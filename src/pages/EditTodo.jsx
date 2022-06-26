


import axios from 'axios';
import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateTodoFailure, updateTodoRequest, updateTodoSuccess } from '../Redux/App/action';


const EditTodo =()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [todo,setTodo]=useState("");
    const addTodo=(id,newStatus) =>{
      dispatch(updateTodoRequest());
      axios.patch(`/todo/${id}`,{status:newStatus} )
      .then((r)=> dispatch(updateTodoSuccess(r.data)))
      .catch((e)=> dispatch(updateTodoFailure(e)));
    }
     const handlecancel=()=>{
      navigate("/");
     }
    
   const handleAdd=()=>{
   
    if(todo){
      const payload={ title:todo, status:false};
      addTodo(payload);
      setTodo("")
    }
    
   }
  return (
    <div>


        <input type="text" placeholder=' update todo task' 
        value={todo} onChange={(e)=> setTodo(e.target.value)}/>
        <button onClick={handleAdd}>update</button>
        <button onClick={handlecancel}>cancel</button>
    </div>
  )
}

export default EditTodo;