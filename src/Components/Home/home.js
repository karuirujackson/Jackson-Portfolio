import React from 'react';
import './home.css';
import { Link } from 'react-scroll';
import BtnImg from '../../assets/hireme.png';
import MyImage from '../../assets/bg1.jpg';

function Home() {
  return (
    <div>
      <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello, <br/></span>
            <span className='introText'>I'm <span className='introName'>Karuiru Jackson</span></span>
            <p className='introPara'>I am a skilled Frontend Developer with experience in creating visually <br/>appealing, interactive and responsive user-friendly web applications </p>
            <Link>
                <button className='btn'>
                    <img src={BtnImg} alt="Hire Me" className='btnImg' />
                    Hire Me
                </button>
            </Link>
        </div>
        <img src={MyImage} alt="profileImg" className='bg' />
      </section>
    </div>
  )
}

export default Home;
