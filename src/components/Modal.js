import React from 'react'

const Modal = ({ setShowModal }) => {
  return (
    <div className='modal'>
      <button className='Btn' onClick={() => setShowModal(false)}>Finish</button>
    </div>
  )
}

export default Modal
