import axios from 'axios';
import React, { useState} from 'react'
// import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTodoFailure, addTodoRequest, addTodoSuccess } from '../Redux/App/action';
// import NotFound from './NotFound';

const AddTodo =()=>{
    const dispatch=useDispatch();
    const [todo,setTodo]=useState("");
    const addTodo=(paylaod) =>{
      dispatch(addTodoRequest());
      axios.post("/todos", paylaod)
      .then((r)=> dispatch(addTodoSuccess(r.data)))
      .catch((e)=> dispatch(addTodoFailure(e)));
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


        <input type="text" placeholder='some add task' 
        value={todo} onChange={(e)=> setTodo(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default AddTodo