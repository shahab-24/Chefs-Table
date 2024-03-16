import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Banner from './assets/Components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
      <Banner></Banner>
      
      
    </>
  )
}

export default App
