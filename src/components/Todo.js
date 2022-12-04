import React from 'react'

const Todo = () => {
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
