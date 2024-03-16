import { useState } from 'react'

import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Banner from './assets/Components/Banner/Banner'
import Recipe from './assets/Components/Recipes/Recipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
      <Banner></Banner>
      <Recipe></Recipe>
      
      
    </>
  )
}

export default App
