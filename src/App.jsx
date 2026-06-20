import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Toggle from './components/Toggle'
import Counter from './components/Counter'
import Slideshow from './components/Slideshow'
import Navbar from './components/Navbar'
import API from './components/API'
import Data from './components/Data'
import Products from './pages/Products'

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
                    <Route path='/data' element={<Data/>}  />
                    <Route path='/products' element={<Products/>}  />
              </Routes>
         </BrowserRouter>
    </>
  )
}

export default App
