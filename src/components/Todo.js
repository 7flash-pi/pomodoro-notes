import React from 'react';
import { useGlobalContext } from '../context/context';

const Todo = () => {

  const {note,setNote,addNotes}=useGlobalContext();

  return (
    <div className='todo-container'>
        <div className="todo-form">
            <input type="text" placeholder='Add New Task' required />
            <input type="" placeholder='Add Category' required />
            <input type="text" placeholder='Duration' required />
            
            <button className='Btn' type='submit'>Add Notes</button>
        </div>
       
    </div>
  )
}

export default Todo
