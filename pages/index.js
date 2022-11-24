import Head from 'next/head'
import Image from 'next/image'

import Particles from '../components/Particles'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useState, useRef } from 'react';

import emailjs from '@emailjs/browser';

export default function Home() {
  console.log('ฅ^•ﻌ•^ฅ txt me 5105080618 ;)')
  const projects = [
    {
      title: 'Vive Consulting Booking Platform',
      skills: 'MERN, Apollo GraphQL',
      link: 'under development',
      imgSrc: '/projectimgs/comingsoon.png',
    },
    {
      title: 'Northbay Networks Website',
      skills: 'React, Next',
      link: 'https://northbaywebsite.vercel.app/',
      imgSrc: '/projectimgs/nbnsc.png',
    },
    {
      title: 'Lets Frickin Game',
      skills: 'MERN, Apollo GraphQL',
      link: 'https://lets-frickin-game.herokuapp.com/',
      imgSrc: '/projectimgs/LFG.png',
    },
    {
      title: 'Offload',
      skills: 'Express, SQL, server-side rendering',
      link: 'https://yeh-offload.herokuapp.com/',
      imgSrc: '/projectimgs/offloadPic.png',
    },
  ]

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iup9zqr', 'template_ff6fbwm', form.current, 'VTKLVfPmAn7MTxksT')
      .then((result) => {
          console.log(result.text);
          window.location.href = '/';
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Head>
        <title>Jack Youkstetter, Sr.Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ zIndex: '5' }}>
        <Particles />
      </div>

      <div className='container ' style={{ height: '300vh', zIndex: '50' }}>
        <div className='row d-flex flex-column justify-content-center'>
          <div className='col-11' style={{ backgroundColor: 'white', marginTop: '5vh' }}>
            <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>Jack Youkstetter</h1>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Full Stack Developer</h2>
            <div style={{ marginBottom: '5px' }}>
              <a href='https://github.com/JackYouk' target="_blank" style={{ color: 'black', marginRight: '3px' }}>
                <GitHubIcon />
              </a>
              <a href='https://www.linkedin.com/in/jack-youkstetter-6b00a81a8/' target="_blank" style={{ color: 'black', marginRight: '3px' }}>
                <LinkedInIcon />
              </a>
              <a href='mailto:jackyoukstetter1@gmail.com' target="_blank" style={{ color: 'black', marginRight: '3px' }}>
                <EmailIcon />
              </a>
              <a href='/resumeThanksgiving.pdf' target="_blank" style={{ color: 'black', marginRight: '3px', fontWeight: 'bold' }}>
                Resume
              </a>
            </div>
          </div>

          <div className='col-11' style={{ backgroundColor: 'white', borderRadius: '0%', marginTop: '2vh' }}>
            <h3 style={{ fontSize: '30px', fontWeight: 'bold', margin: '1px' }}>Bio</h3>
            <p style={{ fontSize: '15px', fontWeight: 'bold', margin: '1px' }}>Hey ฅ^•ﻌ•^ฅ!! I'm a fullstack developer from Oakland, Ca. My hobbies mostly revolve around creating stuff, i.e. short stories, cooking, art, and videos (youtube channel coming soon). Also, I like cats. And dogs. And animals in general. Lastly, thanks for peeping my website.</p>
          </div>
          <div className='col-11' style={{ backgroundColor: 'white', borderRadius: '0%', marginTop: '2vh' }}>
            <h3 style={{ fontSize: '30px', fontWeight: 'bold', margin: '1px' }}>Skills</h3>
            <p style={{ fontSize: '13px', fontWeight: 'bold', margin: '1px' }}>JavaScript, TypeScript, Node, React, Apollo GraphQL, Express, SQL, NoSQL, Next, CSS+SCSS, Git</p>
          </div>
          <div className='col-11' style={{ backgroundColor: 'white', borderRadius: '0%', marginTop: '2vh' }}>
            <h3 style={{ fontSize: '30px', fontWeight: 'bold', margin: '1px' }}>Featured Projects</h3>
            <div className=''>
              {projects.map(project => {
                return (
                  <a href={project.link} target='_blank' >
                    <div className='btn btn-outline-dark d-flex flex-column align-items-center m-2 p-2 ' key={project.title}>
                      <Image src={project.imgSrc} alt='project img' width={171.8} height={94.2} />
                      <p style={{ marginTop: '4px', fontWeight: 'bold' }}>{project.title}</p>
                      <p>Skills: {project.skills}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className='col-11' style={{ backgroundColor: 'white', borderRadius: '0%', marginTop: '2vh' }}>
            <h3 style={{ fontSize: '30px', fontWeight: 'bold', margin: '1px' }}>Contact Me</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" className="form-control mb-3" placeholder="Name" name='user_name'/>
              <input type="text" className="form-control mb-3" placeholder="Company" name='user_company'/>
              <input type="email" className="form-control mb-3" placeholder="Email" name='user_email'/>
              <textarea className="form-control mb-3" placeholder="Your message" name='user_message'></textarea>
              <button className="btn btn-outline-secondary mb-3" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div style={{color: 'white'}}>Website built with Next.js by JackJack</div>
    </div>
  )
}
