import React from 'react'
import {memo} from 'react'

const Navbar = ({adjective , getAdjective }) => {
    console.log("Nav render")
  return (
    <>
     <div>
        I am a {adjective} nav
    </div>
    <button onClick ={()=>{getAdjective()}}>{getAdjective()}</button>
    </>
   
  )
}
export default memo(Navbar)



