import React, { useState } from 'react';
import { setDoc ,  doc} from 'firebase/firestore'
import db  from '../firebase'
const Todo = () => {

  const [category,setCategory]=useState('');
  const [task,setTask]=useState('');
  const [duration,setDuration]=useState('');


  const addNotes = async(e) => {
    const newId=new Date().getTime().toString();
    if(task){
      await setDoc(doc(db,'notes',newId),{
        task: task,
        category: category,
        duration: duration,
        id: newId
      })
      setDuration('');
      setCategory('');
      setTask('');
    }
    
  }

  return (
    <div className='todo-container'>
        <div className="todo-form">
            <input 
              type="text" 
              placeholder='Add New Task'
              required
              onChange={(e) => setTask(e.target.value)}
              value={task} />

            <input 
              type=""
              placeholder='Add Category' 
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)} />

            <input 
              type="text" 
              placeholder='Duration' 
              required
              value={duration}
              onChange={(e) => setDuration(e.target.value)} />
            
            <button className='Btn' type='submit' onClick={addNotes}>Add Notes</button>
        </div>
       
    </div>
  )
}

export default Todo
