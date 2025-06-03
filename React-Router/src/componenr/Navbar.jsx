import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink  className ={(e)=>{return e.isActive?"black":""}} to="/"><li>Home</li></NavLink>
                <NavLink className ={(e)=>{return e.isActive?"black":""}}  to="/about"><li>About</li></NavLink>
                <NavLink className ={(e)=>{return e.isActive?"black":""}}  to="/login"><li>Log in</li></NavLink>
            </nav>

        </div>
    )
}

export default Navbar
