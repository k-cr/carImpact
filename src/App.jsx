import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddCar from './pages/AddCar'
import ViewCar from './pages/ViewCar'
import Navbar from './components/Navbar'

function App() {

  return (
    <Router>
      <Navbar />
      <div className='pt-10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-car' element={<AddCar />} />
          <Route path='/viewCar/:id' element={<ViewCar />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
