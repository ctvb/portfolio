import React from 'react';
import logo from '../img/logo2.png';

export default function Navbar({ handlePageChange }) {
    return (
        <footer className="footer-1 border-gray-200 mt-[50px] bg-gradient-to-r from-cyan-500 to-blue-500">
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
                            <a href='https://www.linkedin.com/in/nicholas-smith-721621220/' className='m-3 text-violet-400 text-2xl' target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href='https://github.com/ctvb' className='m-3 text-violet-400 text-2xl' target='_blank'><i class="fa-brands fa-github"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}