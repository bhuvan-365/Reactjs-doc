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


// memo is a React higher-order component that prevents unnecessary re-renders.
// memo helps optimize your component by skipping re-renders when the props haven’t changed. This is especially useful for components that are expensive to render or are rendered frequently.