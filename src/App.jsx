import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Season5Page from './pages/Season5Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen'>

      <Season5Page></Season5Page>
    </div>
  )
}

export default App
