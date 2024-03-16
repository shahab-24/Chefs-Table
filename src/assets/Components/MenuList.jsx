import React from 'react';

const MenuList = ({item}) => {
  return (
    <div className='flex md:flex flex-col'>
      <img className='item-image' src={item.image} alt="" />
      <h2 className='text-3xl text-black font-bold'>{item.name}</h2>
      <p className='text-black text-semibold text-xl'>{item.description}</p>
      <ul>
        {item.ingredients}
      </ul>
      <div>

        <p>{item.time}</p>

      </div>
      <div>
      {item.calories}
      </div>
      <button className="btn w-60 btn-primary px-4 m-4 text-black font-semibold rounded-full

bg-green-500">Want to Cook</button>
    </div>
  );
};

export default MenuList;