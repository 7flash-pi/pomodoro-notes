import React from 'react';
import { useGlobalContext } from '../context/context';
import { deleteDoc,doc } from 'firebase/firestore';
import db from '../firebase';

const SingleTodo = ({task, openModal , todoId }) => {

    const { setEditId, setEdit, setNotes}=useGlobalContext();

    const deleteTask = async(e)=>{
        e.preventDefault();
        await deleteDoc(doc(db,'notes',todoId));
    }

    const updateTask= (e) =>{
        e.preventDefault();
        setEdit(true);
        setEditId(todoId);
        setNotes(task);
    }

  return (
    <div className="todoList-container">
          <span onClick={openModal}>{task}</span>
          <div className="listBtn">
            <button onClick={updateTask}>
              Edit
            </button>
           <button onClick={deleteTask}>
              Delete
           </button>
          </div>
       </div>
  )
}

export default SingleTodo
