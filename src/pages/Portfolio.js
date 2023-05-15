import React, { useState } from 'react';

export default function Portfolio(){
    return(
        <div className="px-16 flex flex-row justify-center align-baseline">
            <div className="w-1/3 p-6 bg-stone-100 m-12">
            <h3 className='text-2xl p-3 text-center'>Can't Decided</h3>
                <img className="rounded-md w-auto h-46 shadow-sm border-2 p-3 mx-auto" src="/cantdecide.png" alt="Hamburgers wearing hats" />
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
            <div className="w-1/3 p-6 bg-stone-100 m-12">
                <h3 className='text-2xl p-3 text-center'>Chatter Box</h3>
                <img className="rounded-md w-auto h-46 shadow-sm border-2 p-3 mx-auto" src="/chatterbox.png" alt="A sign-up page" />
                <p className='p-6'>
                    Do you want to talk to your friends but they're too far away??
                </p>
                <p className='text-center text-xl'>
                    Chatter Box!
                </p>
            </div>
            <div className="w-1/3 p-6">
                <h2 className='text-3xl pb-2'>My Projects</h2>
                <p>
                    Here are some of the projects that I have worked on so far
                </p>
            </div>
        </div>
    )
}