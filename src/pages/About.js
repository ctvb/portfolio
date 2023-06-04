import React from 'react';
import realme from '../img/realme.jpg';

export default function About() {
    return (
        <div className="px-16 grid md:grid-cols-3 sm:grid-cols-1 gap-4 min-h-3/4">
            <div className="p-3">
                <img className="rounded-full w-96 h-auto shadow-sm border-2 p-3" src={realme} alt="A picture of me"/>
            </div>
            <div className="p-3 col-span-2">
                <h2 className='text-3xl pb-2'>About Me</h2>
                {/* <p>Hi, I'm Nick Smith! I graduated from The University of Kansas in May of 2021 with a double major bachelor's degree in Environmental Studies and Geography as well as an Undergraduate Certificate in Geographic Information Systems (GIS), with experience in ESRI products and QGIS. In May of 2020 I earned a Permaculture Design Certificate, issued by the Kansas Permaculture Society, and in May of 2023 will earn a Coding Certificate from The University of Califonia, Los Angeles Coding Bootcamp.
                </p>
                <br/>
                <p>
                After I graduated I worked for The City of Shawnee, Kansas as the GIS Intern for the Stormwater Engineering Department. Soon after my internship I began working as a GIS Analyst for Integri-tek; soon after, I was let go due to economic reasons. I then decided to learn more about coding; it was during my Undergraduate for Environmental Studies that I first started coding. I now have experience with AWS, CSS, Express, GraphQL, Heroku, HTML, Java, JavaScript, MySQL, Node.js, NoSQL, Python, R, React, and State with JAM, MERN, and WAMP as stacks.
                </p>
                <br/> */}
                <p>
                    Hello, I'm Nick Smith, a passionate environmentalist, geographer, and GIS analyst. I graduated from The University of Kansas (KU) in May of 2021 with a double major bachelor's degree in Environmental Studies and Geography, as well as an Undergraduate Certificate in Geographic Information Systems (GIS), I also hold a Permaculture Design Certificate from the Kansas Permaculture Institute.
                </p>
                <br/>
                <p>
                    During my time at KU, I developed a strong foundation in GIS and gained experience in utilizing ESRI products like ArcGIS Pro, ArcMap, and ArcGIS Online, as well as the open-source software QGIS. I applied these skills to various projects, including tracking and measuring lake volume fluctuations, analyzing changes in forests and prairies over time, optimizing routes through cities, and assessing water and vegetation dynamics in different areas.
                </p>
                <br/>
                <p>
                    Following my graduation, I had the opportunity to work as a GIS Intern for the Stormwater Engineering Department at The City of Shawnee, Kansas. There, I organized and updated city data, prioritized maintenance for stormwater pipes, and accurately recorded and analyzed data to assess pipe quality. I also conducted site visits to locate and document issues, contributing to effective problem-solving strategies.
                </p>
                <br/>
                <p>
                    Later, I transitioned to a role as a GIS Analyst at Integri-tek, where I further honed my GIS skills. I updated gas and oil pipeline data using ArcGIS Pro, ran models to identify and resolve issues, and conducted quality control by examining documents. Although my time at Integri-tek was cut short due to economic reasons, it provided me with valuable remote work experience and strengthened my proficiency in ArcGIS Pro.
                </p>
                <br/>
                <p>
                    Driven by a desire to expand my skill set, I recently completed a Coding Certificate program at The University of California, Los Angeles (UCLA) Coding Bootcamp. This intensive program enhanced my expertise in full-stack development, frontend and backend programming, and various web development technologies such as AWS, C#, CSS, Express, GraphQL, Heroku, HTML, Java, JavaScript, MySQL, Node.js, NoSQL, Python, R, React, and State. I am well-versed in using Git and GitHub for version control and collaboration. In this course I created web pages with functionalities such as weather forecasting, restaurant recommendations, and chat interfaces and am looking to work on more projects in the future.
                </p>
                <br/>
                <p>
                    Throughout my journey, I have cultivated essential qualities such as adaptability, attention to detail, self-motivation, and a strong willingness to learn. These attributes were further reinforced during my final year of university, which was conducted online due to the pandemic. I successfully navigated the challenges and emerged with a deeper appreciation for problem-solving and the ability to remain focused even in uncertain situations.
                </p>
                <br/>
                <p>
                    I am currently seeking a position that allows me to apply my diverse skill set and contribute to meaningful projects. I am eager to leverage my GIS expertise, programming knowledge, and passion for sustainability to make a positive impact. If there are specific programs or languages required for the role, I am more than willing to learn and adapt. I am excited about the prospect of a fulfilling career that offers opportunities for personal and professional growth in an environment that aligns with my values.
                </p>
            </div>
        </div>
    )
}