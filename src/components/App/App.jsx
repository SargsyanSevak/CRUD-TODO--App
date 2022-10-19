import './App.css';
import AddTodo from '../AddTodo/AddTodo.jsx';
import TodoList from '../TodoList/TodoList.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App(){
const[todos,setTodos]=useState([]);
   
const addTodo = (todo)=>{
    if(!todo.text.trim()) return;
    else{
        const newTodos = [todo, ...todos];
         setTodos(newTodos);
    }
}

const deleteTodo =(id)=> {
    setTodos(todos.filter(todo => todo.id !== id))
}

const doneTodo = (id)=>{
    setTodos( todos.map((todo)=>{
        if(todo.id === id) todo.done = !todo.done;
        return todo;
    }));  
}

useEffect(()=>{getTodo()},[])

const getTodo = async ()=>{
    const response = await axios.get('http://localhost:3000/todos');
    setTodos(response.data)
}

return(
    <div className="app">
        <h1 className='title'>CRUD APP</h1>
        <AddTodo addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} doneTodo={doneTodo}/>
    </div>
)
}

export default App