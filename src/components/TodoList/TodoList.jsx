import axios from 'axios'
import React from 'react'
import './TodoList.css'
const TodoList = ({todos,deleteTodo,doneTodo}) => {

const completeTodo =async(id)=>{
  
  let todoItem = todos.find(todo=> todo.id === id)
  todoItem = {...todoItem,done:!todoItem.done}
  const response = await axios.put(`http://localhost:3000/todos/${id}`,todoItem)
  
  if(response.request.status === 200){
    doneTodo(id)
   }
}

  const removeTodo = async (id)=>{
    const response = await axios.delete(`http://localhost:3000/todos/${id}`)
   if(response.request.status === 200){
    deleteTodo(id)
   }
  }
  return todos.map(function(todo,i){
    return(
    <div className='todo' key={i}>
      <div className={todo.done ? 'done':'todo-text'}>{todo.text}</div>
      <div className='todo-icons'>
      <i className="fa-solid fa-check icon"  onClick={()=>completeTodo(todo.id)}></i>
      <i className="fa-solid fa-trash icon" onClick={()=>removeTodo(todo.id)}></i>
      </div>
    </div>
    )
  })
}

export default TodoList