import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParticlesComponent from './components/particles'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ParticlesComponent id="particles"/>
    <h1>Hello</h1>

    </>
  )
}

export default App
