import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='p-3 shadow-xl flex justify-between items-center px-5'>

        <img src='/logo.png' className="w-12 h-auto hover:scale-105 transition-transform duration-300" alt='Sri Lanka Tourism Logo'/>
      
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header

