

// rafce


import React from 'react'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Catalog from './pages/Catalog'
import We from './pages/We'
import Courses from './pages/Courses'
import Theme from './pages/Theme'

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/we' element={<We />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/theme' element={<Theme />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App