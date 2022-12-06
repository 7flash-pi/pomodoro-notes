import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { useGlobalContext } from '../context/context';

const TodoList = () => {

  const [showModal,setShowModal]=useState(false);
  const { notes,fetchNotes}=useGlobalContext();
  
  useEffect(() =>{
    fetchNotes();
  },[])

  const openModal=() => {
    setShowModal(true);
  }

  if(showModal){
    return <Modal setShowModal={ setShowModal } />
  }

  return (
    <div className='todoList'>
       <h4>Your Tasks</h4>

       <div className="todoList-container">
          <span onClick={openModal}>Hello Wassup</span>
          <div className="listBtn">
            <button>
              Edit
            </button>
           <button>
              Delete
           </button>
            
          </div>
       </div>
        
      
    </div>
  )
}

export default TodoList
