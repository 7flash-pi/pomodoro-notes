import React, { useState } from 'react';
import { AiOutlineEdit ,AiOutlineDelete} from 'react-icons/ai';
import Modal from './Modal';

const TodoList = () => {

  const [showModal,setShowModal]=useState(false);

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
              <AiOutlineEdit className='listIcon' />Edit
            </button>
           <button>
              <AiOutlineDelete className='listIcon' />Delete
           </button>
            
          </div>
       </div>
        
      
    </div>
  )
}

export default TodoList
