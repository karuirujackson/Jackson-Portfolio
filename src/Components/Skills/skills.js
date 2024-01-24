import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppOptimization from '../../assets/app-design.png';
import AppTest from '../../assets/testing.png';

function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>Skills</span>
        <span className='skillDesc'>I am a skilled and passionate Front-end Developer with experience in creating interactive, visiually appealling and user-friendly web applications. I have a strong understanding of Application Development, Optimization, Testing and Deplyoment. I am proficient in HTML, CSS, JavaScript, React.JS and Node.JS</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt="UI Design" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>Translate design mockups and wireframes into interactive and responsive web pages, ensuring a seamless and visually appealing user experience.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt="Web Design" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Web/App Design</h2>
                    <p>Planning, conceptualizing, and arranging various elements such as layout, colors, graphics, <br/> fonts, and interactive features to deliver a visually appealing and user-friendly website.. <br/>Develop web applications that are responsive and adapt to various screen sizes, resolutions, and devices.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppTest} alt="App Testing" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Testing and Debugging</h2>
                    <p>Thoroughly test front-end code, identify and fix bugs, and collaborate with quality assurance teams to ensure the overall reliability of the application.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppOptimization} alt="App Optimization" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Web Optimization/API Integration</h2>
                    <p>Optimize the performance of web pages by implementing best practices, such as minimizing file sizes, reducing HTTP requests, and leveraging browser caching.<br/> Interface with APIs (Application Programming Interfaces) to retrieve and send data between the front-end and back-end systems.</p>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Skills;
