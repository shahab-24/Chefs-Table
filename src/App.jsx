
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Navbar from './assets/Components/Navbar/Navbar';
import Banner from './assets/Components/Banner/Banner';
import Recipe from './assets/Components/Recipes/Recipe';
import MenuList from './assets/Components/MenuList';


function App() {
  const [items, setItems] = useState([])
  const [cooks, setCooks] = useState([])
  const [preparingItems, setPreparingItems] = useState([]);
  
  

  useEffect(() => {
    fetch('recipe.json')
    .then(res => res.json())
    .then(data => setItems(data))
  },[]);

  const handleItem = (p) => {
    const isExist = cooks.find((cook => cook.id == p.id))
    if(!isExist){
      setCooks([...cooks,p])
      toast.success('You have successfully selected, please wait for Preparing...');
    } 
    else {
      toast.error('Already selected');

    } 

    
  }
  
  console.log(cooks);

  const preparingButton = (id) => {
    const newSideBar = cooks.filter(item => item.id != id )
      setCooks(newSideBar);
      toast.success('please wait for Cooking...');
      const currentlyItems = 
        cooks.find(cook => cook.id === id);
        setPreparingItems([...preparingItems, currentlyItems]);
      } 


  return (
    <>
     <Navbar></Navbar>
      <Banner></Banner>
      <Recipe></Recipe>
     
     
      <div className='card-container mx-auto grid grid-cols-2 gap-4'>
        <div className='menu-items gap-2'>
          <div className='menu grid grid-cols-2 gap-2'>
            {
              items.map((item => <MenuList key={item.id} handleItem={handleItem} item={item}>
              </MenuList>))
            }
            
            </div>
        </div>

        <div className='side-bar menu'>
        <h1 className='text-center text-black font-bold text-2xl'>Want to cook:<span className='text-green'>{cooks.length}</span>
        <hr></hr>
        </h1>
          <div className='flex justify-around font-bold text-xl'>
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>
          <div className='sidebar'>
            {
              cooks.map((cook,idx) => (
                <div key={cook.id} className='flex justify-around text-xl bg-gray-200 space-y-2 gap-y-4 text-center rounded-xl B'>
                  <p>{idx+1}</p>
                  <p className='mb-2 font-bold text-xl'> {cook.name} </p>
            <p className='mb-2'> {cook.Preparing_time} </p>
            <p className='mb-2'> {cook.calories} </p>
            <button onClick={() =>preparingButton(cook.id)} className="btn mt-2 text-black rounded-xl
           bg-green-500 font-bold  btn-primary"> Preparing </button>

                  

                </div>
              ))
            }
              
  
          </div>

          <h1 className='text-center text-black font-bold text-2xl'>Currently cooking: {preparingItems.length}
        <hr></hr></h1>
          <div className='flex justify-around font-bold text-xl'>
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>


          <div className='sidebar'>
          {preparingItems.map((currentlyItems, idx) => (
            <div
              key={currentlyItems.id}
              className='B flex justify-around text-xl bg-gray-300 space-y-2 gap-y-4 text-center rounded-xl'
            >
              <p>{idx + 1}</p>
              <p className='mb-2 font-bold text-xl'> {currentlyItems.name} </p> 
              <p className='mb-2'> {currentlyItems.Preparing_time} </p>
              <p className='mb-2'> {currentlyItems.calories} </p>
            </div>
          ))}
          

          </div>

          </div>

      </div>
      
      <ToastContainer />
    </>
  );
}

export default App;
