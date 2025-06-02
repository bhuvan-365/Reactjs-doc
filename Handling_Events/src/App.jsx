import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Utshav")
  const [form, setForm] = useState({
    email: "",
    phone: ""
  });

  const handleClick = () => {
    alert("Button clicked!");
  }

  const handleMouseOver = () => {
    alert("Mouse is over the red div!");
  }

  const handleChange = (e)=> {
    // setname(e.target.value)
    setForm({...form,[e.target.name]: e.target.value})
    console.log(form)

  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>



      <div className="red" onMouseOver={handleMouseOver}>
        I am red
      </div>


      <input type="text" name="email" value={form.email} onChange={handleChange}/>
      <input type="text" name="phone" value={form.phone} onChange={handleChange}/>
    </>
  )
}

export default App
