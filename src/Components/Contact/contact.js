import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1rjb344', 'template_jh5ijnk', form.current, 's9smeOwLUF4IjYQ8E')
    .then((result) => {
      console.log(result.text);
      //Reset the form once a message is sent and send an alert message.
      e.target.reset();
      alert('Email Sent!');
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'> Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss work related opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name='your_name'  />
                <input type="text" className='email' placeholder='Your Email' name='your_email' />
                <textarea cols="30" rows="10" className='msg' name='message' placeholder='Your Message'></textarea>
                <button className='submitBtn' value="send" type='submit'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt="Facebook" className='link' />
                    <img src={TwitterIcon} alt="Twitter" className='link' />
                    <img src={YoutubeIcon} alt="Youtube" className='link' />
                    <img src={InstagramIcon} alt="Instagram" className='link' />
                </div>
            </form>
        </div>
      </section>
  )
}

export default Contact;
