import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { useGlobalContext } from '../context/context';
import SingleTodo from './SingleTodo';

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
       

       { notes.map((note)=>{
        return <SingleTodo task={note.task} key={note.id} todoId={note.id} openModal={openModal}/>
      })}

     </div>
  )
}

export default TodoList
