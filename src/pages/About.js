import React, { useState } from 'react';

export default function About() {
    return (
        <div className="px-16 flex flex-row justify-center align-baseline">
            <div className="w-1/3 p-6">
                {/* <img src="/realme.jpg" className="w-96 h-auto block mr-3 " alt=""/> */}

                <img className="rounded-full w-96 h-auto shadow-sm border-2 p-3" src="/realme.jpg" alt="image description"/>


                {/* <img class="h-auto max-w-full" src="/realme.jpg" alt="image description"/> */}

            </div>
            <div className="w-2/3 p-6">
                <h2 className='text-3xl pb-2'>About Me</h2>
                <p>Hi, I'm Nick Smith! I graduated from The University of Kansas in May of 2021 with a double major bachelor's degree in Environmental Studies and Geography as well as an Undergraduate Certificate in Geographic Information Systems (GIS), with experience in ESRI products and QGIS. In May of 2020 I earned a Permaculture Design Certificate, issued by the Kansas Permaculture Society, and in May of 2023 will earn a Coding Certificate from The University of Califonia, Los Angeles Coding Bootcamp.
                </p>
                <br></br>
                <p>
                After I graduated I worked for The City of Shawnee, Kansas as the GIS Intern for the Stormwater Engineering Department. Soon after my internship I began working as a GIS Analyst for Integri-tek; soon after, I was let go due to economic reasons. I then decided to learn how to code and now have experience with AWS, CSS, Express, GraphQL, Heroku, HTML, Java, JavaScript, MySQL, Node.js, NoSQL, Python, R, React, and State with JAM, MERN, and WAMP as stacks.
                </p>
            </div>
        </div>
    )
}