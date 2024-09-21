import { useState } from 'react';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import SendIcon from '@mui/icons-material/Send';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isProduct1Open, setIsProduct1Open] = useState(false);
    const [showSearchInput, setShowSearchInput] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleProductsMenu = () => {
        setIsProductsOpen(!isProductsOpen);
    };

    const toggleProduct1Menu = () => {
        setIsProduct1Open(!isProduct1Open);
    };

    const toggleSearchInput = () => {
        setShowSearchInput(!showSearchInput);
    };

    return (
        <>
            {/* Header contact details */}
            <div className=' bg-yellow-500'>

                <div className="flex justify-between items-center">
                    <div className="overflow-hidden whitespace-nowrap w-1/2">
                        <p className="inline-block p-3 font-semibold animate-scroll hover:stop-scroll">
                            <span className="me-4"> <PhoneInTalkIcon/> +91-9333104137,</span>
                            <span className="me-5"><PhoneInTalkIcon/> +91-9091799132</span>
                            <span><MailOutlineIcon/> Wsiddiquee361@gmail.com</span>
                        </p>
                    </div>
                    <div className="w-1/2 text-right font-semibold me-5">
                        <span  className='me-5'><SecurityUpdateGoodIcon/> Send SMS</span>
                        <span><SendIcon/>Send Email</span>

                    </div>
                </div>

            </div>
            <div className='bg-blue-500  '>


                <nav className="bg-white text-black shadow-lg  z-50">
                    <div className="max-w-7xl mx-auto flex items-center justify-between p-3">
                        {/* Logo */}
                        <div className="text-2xl font-bold text-blue-950">HM STORE</div>

                        {/* Menu for larger screens */}
                        <div className="hidden md:flex items-center space-x-6 z-50 font-semibold justify-between">
                            <a href="#home" className="hover:text-gray-600">Home</a>

                            {/* Products menu with dropdown animation */}
                            <div
                                className="relative group"
                                onMouseEnter={toggleProductsMenu}
                                onMouseLeave={toggleProductsMenu}
                            >
                                <button className="hover:text-gray-600 flex items-center">
                                    Products
                                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown for products with animation */}
                                <div
                                    className={`absolute top-full left-0 mt-2 w-48 bg-slate-100 shadow-lg border py-2 transition-all duration-300 ease-in-out transform origin-top ${isProductsOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                                        }`}
                                >
                                    <div
                                        className="relative hover:bg-gray-500"
                                        onMouseEnter={toggleProduct1Menu}
                                        onMouseLeave={toggleProduct1Menu}
                                    >
                                        <a href="#product1" className="block px-4 py-2">Product 1</a>

                                        {/* Submenu for Product 1 with animation opening to the left */}
                                        <div
                                            className={`absolute top-0 right-full w-48 bg-slate-200 shadow-lg border  py-2 transition-all duration-300 ease-in-out transform origin-right ${isProduct1Open ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                                                }`}
                                        >
                                            <a href="#subproduct1" className="block px-4 py-2 hover:bg-gray-100">Sub Product 1</a>
                                            <a href="#subproduct2" className="block px-4 py-2 hover:bg-gray-100">Sub Product 2</a>
                                        </div>
                                    </div>
                                    <a href="#product2" className="block px-4 py-2 hover:bg-gray-100">Product 2</a>
                                    <a href="#product3" className="block px-4 py-2 hover:bg-gray-100">Product 3</a>
                                </div>
                            </div>

                            <a href="#about" className="hover:text-gray-600">About</a>
                            <a href="#contact" className="hover:text-gray-600">Contact</a>

                            {/* Search input and icon */}
                            <div className="relative">
                                {showSearchInput ? (
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="px-4 py-2 rounded-lg text-black border focus:outline-none"
                                    />
                                ) : (
                                    <button onClick={toggleSearchInput}>
                                        <svg
                                            className="w-6 h-6 text-black"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 15l5.5 5.5M11 4a7 7 0 100 14 7 7 0 000-14z"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Hamburger icon for mobile screens */}
                        <div className="md:hidden">
                            <button onClick={toggleMenu}>
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    {isOpen && (
                        <div className="md:hidden bg-white p-4 space-y-4">
                            <a href="#home" className="block hover:text-gray-600">Home</a>
                            <a href="#about" className="block hover:text-gray-600">About</a>
                            <a href="#contact" className="block hover:text-gray-600">Contact</a>

                            {/* Products dropdown in mobile */}
                            <div className="block">
                                <button onClick={toggleProductsMenu} className="block w-full text-left">
                                    Products
                                </button>
                                {isProductsOpen && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        <a href="#product1" className="block hover:text-gray-600">Product 1</a>
                                        <a href="#product2" className="block hover:text-gray-600">Product 2</a>
                                        <a href="#product3" className="block hover:text-gray-600">Product 3</a>
                                    </div>
                                )}
                            </div>

                            {/* Search input for mobile */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="block w-full px-4 py-2 rounded-lg text-black border focus:outline-none"
                                />
                                <button className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-500">
                                    Search
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </>
    );
}

export default Navbar;
