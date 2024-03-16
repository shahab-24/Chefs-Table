import Rectangle from '../../../../public/Images/Rectangle 1.png'

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{backgroundImage: `url((Rectangle))`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br>
      </br> class tailored for you!</h1>
      <p className="mb-5">Learn and Basic Programming , Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.                </p>
      <div className='flex gap-4'>
      <button className="btn btn-primary rounded-full border-radius: 50px;

bg-[rgb(11, 229, 138)]">Explore Now</button>
      <button className="btn btn-primary rounded-full">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;