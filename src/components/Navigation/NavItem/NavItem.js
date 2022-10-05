import React from 'react'

import './NavItem.css'

const NavItem = (props) => {
  return (
    <div className='nav-item'>
      <li>
        <a href={props.link}>{props.children}</a>
      </li>
    </div>
  )
}

export default NavItem

