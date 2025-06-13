import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [cards, setcards] = useState([])

  const fetchData = async () => {

    const a = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await a.json()
    setcards(data)
   
  }

  useEffect(() => {

    fetchData()

  }, [])



  return (
    <><Navbar />
      <div className="container">
        {cards.map((card) => {
          return <div key={card.UserId} className="card">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By : User id {card.id}</span>
          </div>

        })}



      </div>

    </>
  )
}

export default App
