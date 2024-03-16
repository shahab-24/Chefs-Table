import Rectangle from '../../../../public/Images/Rectangle 1.png'

const Banner = () => {
  return (
    <div className='container mx-auto mt-4'>
      <div className="hero min-h-screen banner" style={{backgroundImage: `url("../../../../public/Images/Rectangle 1.png")`}}>
  <div className="hero-overlay bg-opacity-60 banner"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-3 text-3xl font-extrabold">Discover an exceptional cooking <br>
      </br> class tailored for you!</h1>
      <p className="mb-5">Learn and Basic Programming , Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.                </p>
      <div className='flex justify-center gap-4'>
      <button className="btn btn-primary rounded-full text-black font-semibold border-radius: 50px;

bg-green-500">Explore Now</button>
      <button className="btn btn-neutral rounded-full">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;