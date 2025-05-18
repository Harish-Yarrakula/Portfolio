import React from 'react'
import Homepage from './components/homepage'
import './App.css'
import ServicesSection from './components/ServicesSection'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Homepage/>
      <ServicesSection/>
      <About/>
      <Contact/>
      <Footer/>
    </ErrorBoundary>
  )
}

export default App
