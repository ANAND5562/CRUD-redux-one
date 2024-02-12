import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App