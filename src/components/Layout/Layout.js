import React from 'react'

import Wrapper from '../../hoc/Wrapper'
import Navbar from '../Navigation/Navbar/Navbar'

import './Layout.css'

const Layout = (props) => {
  return (
    <Wrapper>
        <Navbar />
        <div className='layout'>{props.children}</div>
    </Wrapper>
  )
}

export default Layout
