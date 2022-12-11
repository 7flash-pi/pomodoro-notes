import React, { useState } from 'react';
import { setDoc ,  doc} from 'firebase/firestore'
import db  from '../firebase';
import { useGlobalContext } from '../context/context';
const Todo = () => {

const { 
      inputTask,
      setInputTask,
      addNotes}=useGlobalContext();



  const handleChange = input =>{
    const {name,value}=input.target;

    switch(name){
      case 'task':
        setInputTask({...inputTask,
        task:value
        })
        break;

         case 'category':
        setInputTask({...inputTask,
        category:value
        })
        break;


         case 'duration':
        setInputTask({...inputTask,
        duration:value
        })
        break;
    }
  }

  return (
    <div className='todo-container'>
        <div className="todo-form">
            <input 
              type="text" 
              required
              onChange={handleChange}
              value={inputTask.task}
              name='task'
              placeholder='Add Task' />

            <input 
              type="text"
              required
              value={inputTask.category}
              onChange={handleChange} 
              name='category'
              placeholder='add Category'/>

            <input 
              type="text" 
              required
              value={inputTask.duration}
              onChange={handleChange}
              name='duration'
              placeholder='add duration' />
            
            <button className='Btn' type='submit' onClick={addNotes}>Add Notes</button>
        </div>
       
    </div>
  )
}

export default Todo
