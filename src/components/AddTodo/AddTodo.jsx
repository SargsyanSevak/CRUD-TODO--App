import axios from 'axios';
import {useState,useEffect,useRef} from 'react'
import './AddTodo.css'

const AddTodo = ({addTodo}) => {

const [input,setInput]=useState('');
const inputRef = useRef(null);

const postTodo = async(todo)=>{
  if(todo.text.trim()){
     const response = await axios.post('http://localhost:3000/todos',todo);
  if(response.request.status === 201){
    addTodo(todo)
  }
  }
}

useEffect(()=>{
  inputRef.current.focus();
},[])
  const handleSubmit = (e)=>{
    e.preventDefault();
    postTodo({
      id:Date.now(),
      text:input,
      done:false
    });
    setInput('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
       type="text" 
       placeholder='Add todo'
       value={input}
       onChange={(e)=>{
        setInput(e.target.value)}}
        ref = {inputRef}
       />
      <button><i className="fa-solid fa-plus icon"></i></button>
    </form>
  )
}

export default AddTodo