// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import InfinitySlider from './components/InfinitySlider'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import WorkingProcess from './components/WorkingProcess'

function App() {


  return (
    <>
    <Header/>
    <Hero/>
    <InfinitySlider/>
    <Services/>
    <WorkingProcess/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App
