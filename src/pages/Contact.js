import React, { useState } from 'react';

export default function Contact() {
    return (
        <div className="px-16 flex flex-row justify-center align-baseline">
            <div className="w-100 mx-auto p-6">
                <h2 className='text-3xl pb-2 text-center'>Contact Me</h2>
                <br />
                <p className='m-3'>
                    Feel free to contact me with any questions or comments you may have! I am currently looking for full time employment as a GIS Analyst or Web Developer and am also open to freelance work. Currently, I am located in the Kansas City area but am open to relocation and/or remote work. I am available to start immediately. Below are links to my resume, email, GitHub profile, and LinkedIn profile.
                    <br />
                    <br />
                    Thank you for your time, I look forward to hearing from you!
                </p>
                <br />
                <a href="https://drive.google.com/file/d/1EyC2ufT0VbCcwzuP3k095_RZ2zW2Sob-/view?usp=sharing" target='_blank' className='m-3 decoration-blue-500 text-blue-500 underline'>Resume</a>
                <br />
                {/* <h3 className='m-3'> */}
                    <a href="mailto:deenicks@hotmail.com" className='m-3 decoration-blue-500 text-blue-500 underline'>deenicks@hotmail.com</a>
                {/* </h3> */}
                <br />
                <a href='https://www.linkedin.com/in/nicholas-smith-721621220/' className='m-3 text-violet-400 text-2xl' target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                <a href='https://github.com/ctvb' className='m-3 text-violet-400 text-2xl' target='_blank'><i class="fa-brands fa-github"></i></a>
            <form className='w-100 m-3'>                    

                    <div class="grid items-end gap-6 mt-2 md:grid-cols-3">
                        <div class="relative z-0">
                            <input type="text" id="default_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                            <label for="default_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div class="relative z-0">
                            <input type="text" id="default_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                            <label for="default_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                    </div>
                    <div class="grid items-end gap-6 mb-6 md:grid-cols-1">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message here..." required></textarea>
                    </div>
                    <div>
                        <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-violet-400 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Submit</button>
                    </div>

            </form>
            </div>
            
        </div>
    )
}
