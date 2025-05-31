import React from 'react'
import '../App.css'
import home from '../assets/house-door-fill.svg'
import service from '../assets/services.svg'
import about from '../assets/about.svg'
import contact from '../assets/contact.svg'

const SetScreen = (screen) => (event) => {
  // Remove active class from all elements
  const allElements = document.getElementsByClassName('active')
  Array.from(allElements).forEach(el => {
    el.classList.remove('active')
  })

  // Add active class to clicked element's parent
  const clickedElement = event.target.parentElement
  clickedElement.classList.add('active')

  // Scroll to the target section
  const targetSection = document.getElementById(screen)
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const Navbar = () => {
  return (
    <>
    <div className="navbar">
    <div className="nav">
      <>
        <li><img onClick={SetScreen("home")} src={home} alt="home"  /></li>
        <li><img onClick={SetScreen("service")} src={service} alt="service" /></li>
        <li><img onClick={SetScreen("about")} src={about} alt="about" /></li>
        <li><img onClick={SetScreen("contact")} src={contact} alt="contact" /></li>
      </>
    </div>
    </div>
    </>
  )
}

export default Navbar
export { SetScreen }