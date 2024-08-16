import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
        <div className="carousel w-full rounded-3xl">
            {/* first slide */}
            <div id="slide1" className="carousel-item relative w-full rounded-3xl">
                <div className='relative w-full'>
                    <img src="banner.png" className="w-full h-full object-cover" alt="Banner" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h2 className='text-blue-400 text-4xl md:text-7xl font-bold'>
                        <Typewriter words={['Search', 'Filter', 'Sort']} loop={true} cursor={true} />
                    </h2>
                    <h2 className="text-white text-3xl md:text-5xl font-semibold mt-4">
                        What You Need
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;
