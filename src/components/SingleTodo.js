import React from 'react';
import { useGlobalContext } from '../context/context';
import { deleteDoc,doc ,getDoc,} from 'firebase/firestore';
import db from '../firebase';

const SingleTodo = ({task, openModal , todoId }) => {

    const { setEditId, setEdit , setInputTask }=useGlobalContext();

    const deleteTask = async(e)=>{
        e.preventDefault();
        await deleteDoc(doc(db,'notes',todoId));
    }

    const updateTask= async(e) =>{
        e.preventDefault();
        setEdit(true);
        setEditId(todoId);
        const docRef=doc(db,'notes',todoId);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            const newData=docSnap.data();
            console.log(newData);
            setInputTask({
            task:newData.task,
            category:newData.category,
            duration:newData.duration
            })
        } 
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
