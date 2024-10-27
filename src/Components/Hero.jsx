import herImg from '../assets/hero.png'

const Hero = () => {
    return (
        <div className="bg-slate-100 rounded-2xl my-10 p-4 flex flex-col-reverse md:flex-row justify-evenly items-center lg:py-20">
            <div className='space-y-4 lg:space-y-8'>
                <p className='text-4xl lg:text-6xl font-bold text-neutral'>Books to freshen up</p>
                <p className='text-4xl lg:text-6xl font-bold text-neutral'>your bookshelf</p>
                <button className="btn btn-neutral">View The List</button>
            </div>
            <div className='mb-6 md:mb-0'>
                <img src={herImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;