import frame from '../../../../public/Images/Frame 5.png'

const Navbar = () => {
  return (
    <div className='container mt-4 flex flex-col text-center md:flex justify-around mx-auto'>
      <div>
        <h1 className='text-3xl font-bold text-black'>Recipe Calories</h1>
      </div>
      <div className=' gap-2'>
        <ul className='md:flex gap-4'>
          <li>Home</li>
          <li>Recipes</li>
          <li>About</li>
          <li>Search</li>
        </ul>
      </div>
      <div className='flex gap-2 rounded-full'>
      <label className="input input-sm rounded-full flex items-center gap-2">
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text" className="grow" placeholder="Search" />
</label>
      
<img src={frame} alt="" className='w-[24px] h-[24px]' />
      </div>
         
    </div>
  );
};

export default Navbar;