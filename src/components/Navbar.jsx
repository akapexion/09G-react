import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='navbar p-3 bg-slate-900 text-white flex justify-between'>
            <div className='logo'>
              Logo
            </div>
            <div className='items'>
              <ul className='flex gap-4'>
                <li> <Link to="/slide">Slide</Link>  </li>
                <li> <Link to="/counter">Counter</Link> </li>
              </ul>
            </div>
            <div className='toggle'>
                <button>Toggle</button>  
            </div>  
        </div>        
    </>
  )
}

export default Navbar
