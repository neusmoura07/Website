import React, { useState } from 'react'
import Logo from '../Assets/copialogo2.svg'

const NavBar = () => {
  return (
    <nav>
        <div className='nav-logo-container2'>
            <img src={Logo} alt='' />
        </div>
    </nav>
  )
}

export default NavBar