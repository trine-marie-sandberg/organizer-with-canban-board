import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './output.css'
import KanbanBoard from './components/canban'

function App() {
  const [count, setCount] = useState(0)

  return (
    <KanbanBoard />
  )
}

export default App

//Tutorial for the canban board: https://www.youtube.com/watch?v=RG-3R6Pu_Ik
//6:33