import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        <NavbarLeft></NavbarLeft>
        <NavbarRight></NavbarRight>
    </div>
  )
}

export default Navbar