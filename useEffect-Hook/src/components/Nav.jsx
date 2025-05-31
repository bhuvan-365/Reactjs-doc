import React, { useEffect } from 'react'

const Nav = ({ color }) => {
  // CASE 1 : Run on every render
  useEffect(() => {
    alert('I run in every render ')
  })


  // CASE 2 : Run only on first render
  useEffect(() => {
    alert('I run in first render only')
  }, [])

  // CASE 3 : Run only when certain value or state change
  useEffect(() => {
    alert('i run when state: color change')
  }, [color])


  return (
    <div>
      <h1>Hey i am nav of {color} Color </h1>

    </div>
  )
}

export default Nav
