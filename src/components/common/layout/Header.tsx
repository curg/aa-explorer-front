import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'

const Header = () => {
  return (
    <div className='w-full h-20 flex items-center justify-between'>
      <Logo />
      <Navigation />
    </div>
  )
}

export default Header