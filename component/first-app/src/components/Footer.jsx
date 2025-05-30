import React from 'react'
import './Footer.css'

const footer = () => {
  return (
    <div>
      <footer>
        <p className='para'>© 2023 My First React App. All rights reserved.</p>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default footer
