import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <NavLink className={({ isActive }) => isActive ? "border border-secondary py-2 px-3 rounded-lg" : ""
        } to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "border border-secondary py-2 px-3 rounded-lg" : ""
        } to={'listed-books'}>Listed Books</NavLink>
        <NavLink className={({ isActive }) => isActive ? "border border-secondary py-2 px-3 rounded-lg" : ""
        } to={'/pages-to-read'}>Pages to Read</NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 md:py-4 border-b">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-2xl font-bold uppercase">Book Vibe</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 items-center">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2 hidden sm:inline-flex">
                    {/* <a className="btn btn-neutral">Sign in</a>
                    <a className="btn btn-primary">Sign up</a> */}

                    <button className="relative rounded px-5 py-2.5 overflow-hidden group bg-neutral hover:bg-gradient-to-r hover:from-secondary hover:to-primary text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Sign in</span>
                    </button>

                    <button className="relative rounded px-5 py-2.5 overflow-hidden group bg-secondary hover:bg-gradient-to-r hover:from-neutral hover:to-primary text-white hover:ring-2 hover:ring-offset-2 hover:ring-neutral transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Sign up</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;