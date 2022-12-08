import React, { useState } from 'react';
import { setDoc ,  doc} from 'firebase/firestore'
import db  from '../firebase';
import { useGlobalContext } from '../context/context';
const Todo = () => {

const {notes,setNotes}=useGlobalContext();

  const {inputTask,setInputTask}=useState({
    task:'Add New Task',
    category:'Add Category',
    duration:'Duration'
  })


  const addNotes = async(e) => {
    const newId=new Date().getTime().toString();
    if(inputTask.task){
      await setDoc(doc(db,'notes',newId),{
        task: inputTask.task,
        category: inputTask.category,
        duration: inputTask.duration,
        id: newId
      })
      setInputTask({
        task:'',
        category:'',
        duration:''
  });
  setNotes([...notes,inputTask])
    }
    
  }

  const handleChange = input =>{
    const [name,value]=input.target;

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
              name='task' />

            <input 
              type="text"
              required
              value={inputTask.category}
              onChange={handleChange} 
              name='category'/>

            <input 
              type="text" 
              required
              value={inputTask.duration}
              onChange={handleChange}
              name='duration' />
            
            <button className='Btn' type='submit' onClick={addNotes}>Add Notes</button>
        </div>
       
    </div>
  )
}

export default Todo
