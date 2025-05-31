import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//USE CASE 2:
// The useRef hook is used to directly access a DOM element and manipulate it without causing a re-render.

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef()


  useEffect(() => {

    console.log(`First Rendering `)
    ref.current.style.backgroundColor = 'red'


  }, []);


  return (
    <>
      <div>
        <h1>This is vitact</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=>{ ref.current.style.display = "none" }} >change</button>
    </>
  )
}

export default App
