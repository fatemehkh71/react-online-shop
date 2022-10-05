import React from 'react'

import './Controls.css'

const Controls = (props) => {
  
  return (
    <div className='controls'>
      {Object.keys(props.products).map((product) => {
        return (
            <div key={product} className='controls-products'>
                <div>{product}</div>
                <button onClick={() => props.addProduct(product)}>Add</button>
                <button onClick={() => props.removeProduct(product)}>Remove</button>
            </div>
        )
      })}

      <div className='price'>Total Price: {props.price}</div>
      <button className='order-btn' onClick={props.order}>Order</button>
    </div>
  )
}

export default Controls
