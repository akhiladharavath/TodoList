import React, { useState } from 'react';
import img from "../assets/todo.png";


const Todo = () => {

    const[text, setText]=useState("");
    const[todos, setTodos]=useState([]);
    const[edit, setEdit]=useState(-1);

    const getRandomColor = () =>{
        const getLightValue = () => Math.floor(Math.random()*56) + 200;
        return `rgb(${getLightValue()},${getLightValue()},${getLightValue()} )`;
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (text.trim()){
            if(edit === -1){
                const task = {text, color:getRandomColor()};
            setTodos([...todos, task]);

            }
            else{
                const upadtedTodos = [...todos];
                upadtedTodos[edit].text = text;
                setTodos(upadtedTodos);
                setEdit(-1);
            }
            setText("");
            
        }

    }

    const handleEdit = (index) => {
        setText(todos[index].text);
        setEdit(index);
    }

    const handleDelete = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
        
    }

  return (
    <div className='container'>
        <div className='todo'>
            <h1 className='heading'> To Do List</h1>
            <form>
                <input className='search' type="text" placeholder='Add Todos...' value={text}
                 onChange={(e) => setText(e.target.value)}  />
                <button className='btn' onClick={handleClick}>
                    {edit === -1 ? "ADD" : "Update" }</button>
            </form>

            {todos.length === 0 && (
                <div className='image'>
                    <img src={img} alt="Empty Todo" />
                    </div>
            )}

            <div className='task'>
             {todos.map((todo, index) => (
                <div key={index} className='add' style={{backgroundColor:todo.color}}>
                    <p>{todo.text}</p>
                    <div className='buttons'> 
                    <i class="fa-solid fa-pen-to-square edit" onClick={() => handleEdit(index)}></i>
                    <i class="fa-solid fa-trash-can trash" onClick = {() => handleDelete(index)}></i>
                    </div>

                </div>

             ))}
            </div>
        </div>
    </div>
  )
}

export default Todo;