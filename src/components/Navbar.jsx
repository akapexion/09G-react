import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='navbar bg-blue-900 p-3 text-white flex justify-between'>
              <div>
                Logo
              </div>
              <div>
                <ul className='flex gap-4'>
                  <li> <Link to="/abc">Slide</Link> </li>
                  <li>  <Link to="/counter">Counter</Link> </li>
                </ul>
              </div>
              <div>
                <button>Toggle</button>
              </div>
        </div>
    </>
  )
}

export default Navbar
