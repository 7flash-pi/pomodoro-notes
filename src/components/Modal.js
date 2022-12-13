import React from 'react';
import Timer from './Timer';

const Modal = ({ setShowModal ,note }) => {
  return (
    <div className='modal'>
          <div className="modal-container">
          <div className="left">
           <Timer note={note} />
          </div>
          <div className="right">
            <h4>{note.task}</h4>
            <small>duration:{note.duration}</small>
             
          </div>
      </div>
      <button className='Btn' onClick={() => setShowModal(false)}>Finish</button>
    </div>
  )
}

export default Modal
