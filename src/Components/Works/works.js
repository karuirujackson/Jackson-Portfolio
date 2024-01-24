import React from 'react';
import './works.css';
import Portfolio7 from '../../assets/portfolio-7A.png';
import Portfolio8 from '../../assets/portfolio-8A.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio4 from '../../assets/portfolio-4.png';

function Works() {
  return (
    <section id='works'>
        <h2 className='worksTitle'>Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.
I am excited to bring my skills and experience to help businesses achieve their goals and create a
strong online presence</span>
<div className='worksImgs'>
    <img src={Portfolio7} alt="" className='worksImg' />
    <img src={Portfolio8} alt="" className='worksImg' />
    <img src={Portfolio2} alt="" className='worksImg' />
    <img src={Portfolio4} alt="" className='worksImg' />
</div>
<button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works;
