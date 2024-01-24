import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
// import { useDispatch, useSelector } from 'react-redux'
// import {increment, decrement} from "../src/features/userSlice"

function App() {


  return (
    <>
    <Navbar />
      <h3>Redux Toolkit</h3>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />  } />
     </Routes>
    </>
  )
}

export default App
