import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Banner from './assets/Components/Banner/Banner'
import Recipe from './assets/Components/Recipes/Recipe'
import MenuList from './assets/Components/MenuList'

function App() {
  const [items, setItems] = useState([])
  const [cooks, setCooks] = useState([])
  

  useEffect(() => {
    fetch('recipe.json')
    .then(res => res.json())
    .then(data => setItems(data))
  },[]);

  const handleItem = (p) => {
    const isExist = cooks.find((item => item.id == item.id))
    if(!isExist){
      setCooks([...cooks, p])
    } 
    else {
      alert('already selected')

    } 

    
  }
  console.log(cooks);
  return (
    <>
     <Navbar></Navbar>
      <Banner></Banner>
      <Recipe></Recipe>
     
      <div className='card-container mx-auto grid grid-cols-2 gap-4'>
        <div className='menu-items grid gap-2'>
          <div className='menu grid grid-cols-2 gap-2'>
            {
              items.map((item => <MenuList key={item.id} handleItem={handleItem} item={item}>
              </MenuList>))
            }
            
            </div>
        </div>

        <div className='side-bar menu'>
        <h1 className='text-center text-black text-2xl'>Want to cook: <span>0</span></h1>
          <div className='flex justify-around'>
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>

          </div>

        </div>

      </div>
      
      
    </>
  )
}

export default App
