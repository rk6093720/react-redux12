import React from 'react'
import { Link } from 'react-router-dom'

const TodoList = ({todoList}) => {
  return (
    <div>
        {todoList?.map(item=>{
           return (
           <div key={item.id}>
            <Link to={`/todo/${item.id}`}>   
            <div> {item.title}</div>
            </Link>
            </div>
           );
        })}
    </div>
  )
}

export default TodoList