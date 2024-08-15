import { Typewriter } from "react-simple-typewriter";


const Banner = () => {
    return (
        <div className="carousel w-full">

            {/* first slide  */}
  <div id="slide1" className="carousel-item relative w-full">
    <div className='relative w-full'>
    <img src="banner.png" className="w-full h-2/3" />
    <div className="absolute top-0 left-0 w-full h-2/3 bg-black opacity-50"></div>
    </div>
    <div className="absolute top-1/4 left-10">
            <h2 className="text-white text-center text-3xl md:text-5xl font-semibold">
              Explore With Us
            </h2>
            <h2 className='text-blue-400 text-center text-4xl md:text-7xl font-bold'>
            <Typewriter words={['Eiffel Tower','France']} loop={true} cursor={true} />
            </h2>
          </div>
    <div className="absolute flex transform -translate-y-1/2 left-1/2 top-2/3">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  {/* second slide  */}
  <div id="slide2" className="carousel-item relative w-full">
  <div className='relative w-full'>
    <img src="banner2.png" className="w-full h-2/3" />
    <div className="absolute top-0 left-0 w-full h-2/3 bg-black opacity-50"></div>
    </div>
        {/* Typewriter  */}
        <div className="absolute top-1/4 left-10">
            <h2 className="text-white text-center text-3xl md:text-5xl font-semibold">
              Explore With Us
            </h2>
            <h2 className='text-blue-400 text-center text-4xl md:text-7xl font-bold'>
            <Typewriter words={['Louvre Museum','France']} loop={true} cursor={true} />
            </h2>
          </div>

    <div className="absolute flex transform -translate-y-1/2 left-1/2 top-2/3">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

 
</div>
    );
};

export default Banner;