import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)

const [todos, settodos] = useState([
  { id: 1, title: 'Learn React' },
  { id: 2, title: 'Learn Vite' },
  { id: 3, title: 'Build a project' }
])

// const Todo =({todo})=>{
//   return (
//     <div >
//       <h2>{todo.title}</h2>
//       <p>Todo ID: {todo.id}</p>
//     </div>
//   )
// }

  return (
    <>
    <h1 className="bg-red-500 text-white">Test Tailwind</h1>
    {
      todos.map(todo  =>{
        // return <Todo key={todo.id} todo = {todo}/>
        return (
            <div className='my-3 p-3 border border-gray-300 rounded-lg shadow-lg' key={todo.id}
            >
      <h2>{todo.title}</h2>
      <p>Todo ID: {todo.id}</p>
    </div>
        )
      })
    }

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>


      {/* {showbtn?<button>I will show click</button>: "is false"} */}
      {showbtn && <button>I will show click</button>}

      <div className="card">
        <button onClick={() => setshowbtn((!showbtn))}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
