import herImg from '../assets/hero.png'

const Hero = () => {
    return (
        <div className="bg-slate-100 rounded-2xl my-10 p-4 flex flex-col-reverse md:flex-row justify-evenly items-center lg:py-20">
            <div className='space-y-4 lg:space-y-8'>
                <p className='text-4xl lg:text-6xl font-bold text-neutral'>Books to freshen up</p>

                <p className='text-4xl lg:text-6xl font-bold text-neutral'>your bookshelf</p>

                <button className="relative rounded px-6 py-2.5 overflow-hidden group bg-neutral hover:bg-gradient-to-r hover:from-secondary hover:to-primary text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">View The List</span>
                </button>
            </div>
            <div className='mb-6 md:mb-0'>
                <img src={herImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;