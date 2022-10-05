import React from 'react'
import Wrapper from '../../../hoc/Wrapper'
import Backdrop from '../Backdrop/Backdrop'

import './Modal.css'

const Modal = (props) => {
  const summary = Object.keys(props.products).map((product) => {
    return <li key={product}>{product}: {props.products[product]}</li>
  })

  return (
    <Wrapper>
      <div className='modal' style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}>
        <h3>Order</h3>
        <ul>{summary}</ul>
        <p>Total Price: {props.price}</p>
        <p>Continue?</p>
        <button className='btn success' onClick={() => console.log('continue')}>Continue</button>
        <button className='btn danger' onClick={props.closeModal}>Cancel</button>
      </div>
      <Backdrop show={props.show} closeModal={props.closeModal} />
    </Wrapper>

  )
}

export default Modal
