import React from 'react';
import cantdecide from '../img/cantdecide.png';
import chatterbox from '../img/chatterbox.png';
import habittracker from '../img/habittracker.png';
import weather from '../img/weather.png';
import techtalk from '../img/techtalk.png';

export default function Portfolio() {
    return (
        <div className="px-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
            <div className="p-2">
                <h2 className='text-3xl pb-2'>My Projects</h2>
                <p>
                    The following are some of the projects that I have worked on so far.
                </p>
                <p>
                    These projects were made using CSS, Express.js, HTML, JavaScript, MySQL, Node.js, React.js, and Mongodb. I am currently in the process of learning more languages and frameworks. The frameworks that I have use so far include Bootstrap, Bulma, and Tailwind.
                </p>
                <p>
                    Would you like to visit my
                    <a href="https://github.com/ctvb" target='_blank' className='m-3 decoration-blue-500 text-blue-500 underline'><i class="fa-brands fa-github"></i>GitHub<i class="fa-brands fa-github"></i></a>
                    profile?
                </p>
            </div>
            <div className="p-2 bg-stone-100">
                <h3 className='text-2xl p-3 text-center'>Can't Decide</h3>
                <a href="https://ctvb.github.io/cantdecide/" target='_blank'><img className="rounded-md w-auto h-46 shadow-sm border-2 p-3 mx-auto" src={cantdecide} alt="Hamburgers wearing hats" /></a>
                <div className='flex flex-col justify-between'>
                    <div className=''>
                        <p className='p-6'>
                            "Honey, what do you want for dinner?"
                        </p>
                        <p className='p-6 pt-1'>
                            "I don't know, what do YOU want?"
                        </p>
                        <p className='p-6 pt-1'>
                            "I don't know, that's why I asked you!"
                        </p>
                        <p className='p-6 pt-1'>
                            Has this ever happened to you? Avoid the trouble of ending up in an endless loop of "What do you want to eat?", avoid ending up at Applebees...again, avoid another argument, download Can't Decide now!"
                        </p>
                    </div>
                    <div className='text-center'>
                        <a href="https://github.com/ctvb/cantdecide" className='m-20 p-5 text-violet-400 text-2xl' target='_blank'><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
            <div className="p-2 bg-stone-100">
                <h3 className='text-2xl p-3 text-center'>ChatterBox</h3>
                <a href="https://infinite-retreat-60959.herokuapp.com/signup" target='_blank'><img className="rounded-md w-auto h-46 shadow-sm border-2 p-3 mx-auto" src={chatterbox} alt="A sign-up page" /></a>
                <p className='p-6'>
                    Do you want to talk to your friends but they're too far away?? Well, now you can!
                </p>
                <p className='text-center text-xl p-6'>
                    ChatterBox!
                </p>
                <p className='p-6'>
                    ChatterBox is your one-stop-shop for all your chatting needs! With ChatterBox you can create an account, log in, and chat with your friends!
                </p>
                <div className='text-center'>
                    <a href="https://github.com/ctvb/Chatter-Box" className='m-20 p-5 text-violet-400 text-2xl' target='_blank'><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className="p-2 bg-stone-100">
                <h3 className='text-2xl p-3 text-center'>Habit Tracker</h3>
                <a href="https://whispering-gorge-05814.herokuapp.com/" target='_blank'><img className="rounded-md w-auto h-46 shadow-sm border-2 p-3 mx-auto" src={habittracker} alt="A dashboard page" /></a>
                <p className='p-6'>
                    Do you want healthier habits? Don't we all! Well, now you can track your habits and see how you're doing with this Habit Tracker!
                </p>
                <p className='p-6'>
                    This habit tracker allows you to make your schedule on the calendar, give yourself daily and weekly goals, as well as log how you're feeling in the diary.
                </p>
                <div className='text-center'>
                    <a href="https://github.com/samanthaahn/magic-list" className='m-20 p-5 text-violet-400 text-2xl' target='_blank'><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className="p-2 bg-stone-100">
                <h3 className='text-2xl p-3 text-center'>Tech Talk</h3>
                <a href="https://floating-woodland-04496.herokuapp.com/" target='_blank'><img className="rounded-md w-auto h-46 shadow-sm border-2 p-3 mx-auto" src={techtalk} alt="A blog page" /></a>
                <p className='p-6'>
                    Tech Talk is a blog site where you can post about anything tech related! After you create an account you can create posts and comment on other peoples posts.
                </p>
                <div className='text-center'>
                    <a href="https://github.com/ctvb/techblog" className='m-20 p-5 text-violet-400 text-2xl' target='_blank'><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
            <div className="p-2 bg-stone-100">
                <h3 className='text-2xl p-3 text-center'>Weather Dashboard</h3>
                <a href="https://ctvb.github.io/weather/" target='_blank'><img className="rounded-md w-auto h-46 shadow-sm border-2 p-3 mx-auto" src={weather} alt="A dashboard page" /></a>
                <p className='p-6'>
                    Have you ever needed to know what the weather was going to be like? Of course you have! Well, now you can with this Weather Dashboard!
                </p>
                <p className='p-6'>
                    Simply enter the city and state that you want weather information on and <strong>BAM!</strong> You have the weather!
                </p>
                <div className='text-center'>
                    <a href="https://github.com/ctvb/weather" className='m-20 p-5 text-violet-400 text-2xl' target='_blank'><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}