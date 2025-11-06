import React from 'react'
import Navbar from './Companants/Navbar'
import {Route, Routes} from 'react-router-dom'
import Landing from './Pages/LandingPage'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing/>} />
        
      </Routes>
    </>
  )
}

export default App
