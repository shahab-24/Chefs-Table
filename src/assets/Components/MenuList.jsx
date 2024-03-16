import React from 'react';

const MenuList = ({item, handleItem}) => {
  return (
    <div className=''>
      <div className='menu space-y-4'>
      <img className='item-image' src={item.image} alt="" />
      <h2 className='text-3xl text-black font-bold'>{item.name}</h2>
      <p className='text-black text-semibold text-xl'>{item.description}</p>
      <ul>
        <li>{item.ingredients}</li>
      </ul>
      <div className='flex justify-around'>

        <p>{item.preparing_time}</p>
        {item.calories}
      </div>
      
      
      
      <button onClick={(e) => handleItem(item)} className="btn w-60 btn-primary px-4 m-4 text-black font-semibold rounded-full
bg-green-500">Want to Cook</button>
    </div>
    </div>
  );
};

export default MenuList;