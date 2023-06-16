import React from 'react';
import logo from '../img/logo.png';

export default function Navbar({ handlePageChange}) {
    return (
        <nav className="border-gray-200 bg-gradient-to-r from-fuchsia-300 via-purple-500 to-indigo-300">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="!#" className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="A Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Nick</span>
            </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
                <li>
                    <a href="#About" onClick={() => handlePageChange('About')} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">About</a>
                </li>
                <li>
                    <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Portfolio</a>
                </li>
                {/* <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Pricing</a>
                </li> */}
                <li>
                    <a href="#Contact" onClick={() => handlePageChange('Contact')} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Contact</a>
                </li>
                <li>
                            <a href="https://drive.google.com/file/d/1vujUbpXaQq157i4x7vaB4JR1SqP_OJrr/view?usp=sharing" target='_blank' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Resume</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
)}