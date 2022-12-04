import React from 'react';
import { AiOutlineEdit ,AiOutlineDelete} from 'react-icons/ai';

const TodoList = () => {
  return (
    <div className='todoList'>
       <h4>Your Tasks</h4>

       <div className="todoList-container">
          <span>Hello Wassup</span>
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
