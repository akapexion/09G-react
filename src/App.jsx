import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Toggle from './components/Toggle'
import Counter from './components/Counter'
import Slideshow from './components/Slideshow'
import Navbar from './components/Navbar'
import API from './components/API'

const App = () => {
  return (
    <>
         <BrowserRouter>

          <Navbar/>
              <Routes>
                    <Route path='/' element={<Toggle/>}  />
                    <Route path='/counter' element={<Counter/>}  />
                    <Route path='/slide' element={<Slideshow/>}  />
                    <Route path='/api' element={<API/>}  />
              </Routes>
         </BrowserRouter>
    </>
  )
}

export default App
