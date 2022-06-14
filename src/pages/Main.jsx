import React, { useEffect } from 'react'
import About from '../componets/About'
// import Footer from '../componets/Footer'
import Gallery from '../componets/Gallery'
import Header from '../componets/Header'
// import Navbar from '../componets/Navbar'
import Result from '../componets/Result'
import School from '../componets/School'
// import Social from '../componets/Social'
import Aos from 'aos';

const Main = () => {

  useEffect(() => {
    Aos.init({
      once: true,
      // duration: 1700,
    })
  }, [])

  return (
    <>
      <Header />
      <About />
      <School />
      <Result />
      <Gallery />
    </>
  )
}

export default Main