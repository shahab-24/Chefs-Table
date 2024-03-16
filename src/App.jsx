import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Banner from './assets/Components/Banner/Banner'
import Recipe from './assets/Components/Recipes/Recipe'
import MenuList from './assets/Components/MenuList'

function App() {
  const [items, setItems] = useState([])
  

  useEffect(() => {
    fetch('recipe.json')
    .then(res => res.json())
    .then(data => setItems(data))
  },[])
  return (
    <>
     <Navbar></Navbar>
      <Banner></Banner>
      <Recipe></Recipe>
     
      <div className='card-container flex gap-4 shadow-sm'>
        <div className='menu-items flex gap-2'>
          <div>
            {
              items.map((item => <MenuList key={item.id} item={item}>

              </MenuList>))
            }
            
            
            </div>
            <div>
            <h2>hello</h2>
            </div>

        </div>
        <div className='side-bar'>
          <h1>Want to cook: <span>0</span></h1>

        </div>

      </div>
      
      
    </>
  )
}

export default App
