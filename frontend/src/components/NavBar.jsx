import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
const Navbar = () => {
    const user = false; // Placeholder for user state
    const isAdmin = false; // Placeholder for admin state

    return (
        <header className='fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md 
        shadow-lg z-40 transition-all duration-300 border-b border-emerald-800 block'>
            <div className='container mx-auto px-4 py-3'>
                <div className='flex flex-wrap justify-between items-center'>
                    <Link to='/' className='text-2xl font-bold text-[#6cd506]
                     items-center space-x-2 flex block'>
                        <img src={logo} className="h-14" />
                        -Commerce
                    </Link>

                    <nav className='flex flex-wrap items-center gap-4 block'>
                        <Link
                            to={"/"}
                            className='text-gray-300 hover:text-[#6cd506] transition duration-300 ease-in-out block'
                        >
                            Home
                        </Link>
                        {user && (
                            <Link
                                to={"/cart"} className="relative group text-gray-300
                                 hover:text-[#6cd506] transition duration-300 ease-in-out block">
                                <ShoppingCart className="inline-block mr-1 group-hover:text-[#6cd506]" size={20} />
                                <span className="hidden sm:inline block">Cart</span>
                                <span
                                    className='absolute -top-2 -left-2 bg-[#6cd506] text-white rounded-full px-2 py-0.5 
									text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out block'
                                >
                                    3
                                </span>

                            </Link >
                        )}
                        {isAdmin && (
                            <Link
                                className="bg-[#6cd506] text-white rounded-md px-3 py-2 
                                
                                text-sm hover:bg-[#6dd506d7] transition duration-300 ease-in-out block"
                            >
                                <Lock className="inline-block mr-1" size={18} />
                                <span className="hidden sm:inline block">Dashboard</span>
                            </Link>
                        )}
                        {user ? (
                            <button
                                className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
                                rounded-md flex items-center transition duration-300 ease-in-out block'
                            >
                                <LogOut size={18} />
                                <span className='hidden sm:inline ml-2 block'>Log Out</span>
                            </button>
                        ) : (
                            <>
                                <Link
                                    to={"/signup"}
                                    className='bg-[#6cd506] hover:bg-[#6dd506d7] text-white py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out block'
                                >
                                    <UserPlus className='mr-2' size={18} />
                                    Sign Up
                                </Link>
                                <Link
                                    to={"/login"}
                                    className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out block'
                                >
                                    <LogIn className='mr-2' size={18} />
                                    Login
                                </Link>
                            </>
                        )}

                    </nav>
                </div>
            </div>
        </header >
    );
};

export default Navbar;

