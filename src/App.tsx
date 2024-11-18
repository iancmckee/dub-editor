import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CaptionElement from './components/CaptionElement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>The Perfect SRT editor</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <CaptionElement/>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
