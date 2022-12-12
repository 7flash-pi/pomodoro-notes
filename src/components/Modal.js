import React from 'react';
import Timer from './Timer';

const Modal = ({ setShowModal }) => {
  return (
    <div className='modal'>
          <div className="modal-container">
          <div className="left">
           <Timer />
          </div>
          <div className="right">
            next
          </div>
      </div>
      <button className='Btn' onClick={() => setShowModal(false)}>Finish</button>
    </div>
  )
}

export default Modal
