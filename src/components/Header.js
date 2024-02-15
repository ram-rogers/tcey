import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <div className="flex items-center">
                    <a href="#" className="text-xl font-bold justify-start"><img src="//thecircleeyewears.com/cdn/shop/files/Group_3.png?v=1699038859&width=100" alt="" /></a>
                    <ul className="ml-4 space-x-4 hidden md:flex justify-end">
                        <li><a href="#" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300">About</a></li>
                        <li><a href="#" className="hover:text-gray-300">Services</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
