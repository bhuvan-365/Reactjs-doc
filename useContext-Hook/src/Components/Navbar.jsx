import React from 'react'
import Button from './Button'


const Navbar = ({count}) => {
  return (
    <>
     <div>
      <h1>Navbar</h1>
    </div>
    <Button count={count}/>
    </>
   
  )
}

export default Navbar
