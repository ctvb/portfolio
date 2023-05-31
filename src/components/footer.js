import React from 'react';
import logo from '../img/logo1.png';

export default function Navbar({ handlePageChange }) {
    return (
        <footer className="footer-1 border-gray-200 mt-[50px] bg-gradient-to-r from-yellow-300 via-orange-400 to-red-300">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="!#" className="flex items-center">
                    <img src={logo} className="h-8 mr-3" alt="A Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Nick</span>
                </a>
                <ul className="font-medium flex flex-row p-4 md:p-0 mt-4 rounded-lg md:mt-0">
                    <li className="mr-3">
                        <a href='https://www.linkedin.com/in/nicholas-smith-721621220/' className='text-white text-2xl' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href='https://github.com/ctvb' className='text-white text-2xl' target='_blank'><i className="fa-brands fa-github"></i></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
