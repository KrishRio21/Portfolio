import React, { useState, useEffect } from 'react'
import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCreative, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import profile from '../../assets/profile img.png'
import gradient from '../../assets/radial gradient.webp'
import whitegradient from '../../assets/white radial gradient.webp'
import triangle from '../../assets/triangle.svg'
import zigzagLine from '../../assets/zigzag-line.svg'
import { Link } from 'react-router-dom'
import ServiceCard from './ServiceCard'
import ProjectCard from '../Portfolio/ProjectCard'
import Connect from '../Connect'
import TypeEffect from './TypeEffect';

function Home() {
  const [waitingTime, setWaitingTime] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setWaitingTime(true)
    }, 500);
  }, [])

  return (
    <>
      <section className='home-hero-section pt-32 pb-20 relative'>
        <img src={triangle} alt="triangle" className='absolute left-[10%] top-[20%] animate-rotate-up-down-left' />
        <img src={triangle} alt="triangle" className='absolute right-[12%] top-[30%] rotate-[78deg] animate-rotate-up-down-right' />
        <img src={triangle} alt="triangle" className='absolute left-2/4 bottom-[10%] rotate-[-90deg] animate-rotate-left-right' />
        <div className='container flex flex-wrap md:flex-nowrap justify-between items-center mx-auto my-10 gap-4 px-4'>
          <div className='relative'>
            <h1 className='text-2xl font-cairo font-semibold tracking-wide'>Hello World! <span className='emoji-wave' role='img' aria-labelledby='wave'>👋</span> I am  </h1><span className='text-secondary text-[42px] font-extrabold font-cairo tracking-wide relative sm:whitespace-normal whitespace-nowrap'><svg aria-hidden="true" id="name-underline" viewBox="0 0 297 33" className={`absolute left-0 top-[64%] h-[0.58em] w-full fill-transparent sm:opacity-0  ${waitingTime ? "block" : "hidden"} stroke-[#9fecff4b] stroke-[3.5]`} preserveAspectRatio="none"><path d="M0.999989 20.5C79.5 4.5 85.5 5.5 85.5 5.5C354.5 -9.50001 -56.5262 35.0001 216.5 22.8813C235.5 22.0379 266.931 23.7779 296.5 31" /></svg> <span className='glow'>Sreepada Mohana Krishna</span></span>
            <h2 className='text-3xl font-extrabold tracking-wide text-accent font-cairo my-7'><TypeEffect /></h2>
            <p className='hover:text-secondary fill-white w-max hover:fill-secondary mt-14 transition-all duration-300'>
              <Link to={'/portfolio'} className='learn-more-link flex items-center relative font-medium text-lg'><span>Explore my portfolio</span> <svg xmlns="http://www.w3.org/2000/svg" className='h-[18px] fill-inherit ms-2' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg></Link>
            </p>
          </div>
          <div>
            <img src='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/u8g7elqqmc3ogww8lkg3' className='h-[300px] md:h-[400px] mt-10 md:mt-0' alt="homepage-illustration" />
          </div>
        </div>
      </section>

      <section className='container px-4 mx-auto'>
        {/* Get To know me div */}
        <div className='py-20 fade-in-section'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-center text-4xl mt-10 text-[#66e0ff] neon-underline'>Get To Know Me</h1>
            <hr className='border-b-4 border-[#66e0ff] w-36 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <div className='flex flex-col md:flex-row gap-16 items-center'>
            <div>
              <p className='text-accent'>
                I’m a dedicated cybersecurity engineer and fullstack developer with a strong foundation in kali linux, HTML, CSS, JavaScript, Python, React JS complemented by hands-on experience in building secure and scalable web applications.
              </p><br />
              <p className='text-accent'>
                My passion lies in crafting dynamic, user-centric solutions that seamlessly blend front-end design with robust back-end logic, as demonstrated in projects like Steg-Ultimate—a steganography tool—and a Zero Trust Access Control System, where I implemented advanced security measures and responsive interfaces.
              </p><br />
              <p className='text-accent'>
                I thrive on exploring cutting-edge technologies, staying ahead of web development trends, and turning complex ideas into reality through clean, efficient code—whether it’s designing interactive UIs or securing back-end systems against threats.
              </p>
            </div>
            <div className='relative w-full flex justify-center'>
              <img src={profile} alt="profile-img" className='h-52 z-10 holographic-card' />
              <img src={gradient} alt="gradient" className='absolute -top-16 h-[350px] z-0' />
              <img src={whitegradient} alt="gradient" className='absolute blur-xl h-52 z-0' />
            </div>
          </div>
        </div>

        {/* Services div */}
        <div className='py-20 fade-in-section'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl mt-10 text-center text-[#66e0ff] neon-underline'>What Can I Do <span className='whitespace-nowrap'>For You</span></h1>
            <hr className='border-b-4 border-[#66e0ff] w-48 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent'>
            Discover how I can elevate your projects with my expertise in cybersecurity and full-stack web development. I specialize in ethical hacking, vulnerability assessments, efficient front-end development with React.js, and robust back-end solutions using Python and Django. Let’s collaborate to build secure, innovative solutions that bring your ideas to life.
          </p>
          {/* For smaller screens */}
          <div className="md:hidden mt-14">
            <Swiper
              modules={[EffectCards, Pagination]}
              effect="cards"
              pagination={true}
              grabCursor={true}
              style={{ overflow: 'hidden' }}
            >
              <SwiperSlide className='justify-center' style={{ display: 'flex' }}>
                <ServiceCard
                  image='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/uiux'
                  title="Ethical Hacking & Vulnerability Assessments"
                  description="Leveraging tools like Burp Suite, Nmap, and Metasploit to identify and mitigate security risks, ensuring your applications are fortified against threats."
                />
              </SwiperSlide>
              <SwiperSlide className='justify-center' style={{ display: 'flex' }}>
                <ServiceCard
                  image='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/frontend'
                  title="Front-End Development"
                  description="Crafting dynamic and responsive websites using HTML, CSS, JavaScript, and modern frameworks like React.js, Next.js, and Tailwind CSS, with a focus on user experience and security."
                />
              </SwiperSlide>
              <SwiperSlide className='justify-center' style={{ display: 'flex' }}>
                <ServiceCard
                  image='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/backend'
                  title="Back-End Development"
                  description="Developing secure and scalable back-end systems using Django and Django REST Framework, ensuring your applications perform efficiently and are protected from vulnerabilities."
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* For larger screens */}
          <div className='hidden md:flex justify-center items-center flex-row gap-14 flex-wrap mt-14'>
            <ServiceCard
              image='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/uiux'
              title="Ethical Hacking & Vulnerability Assessments"
              description="Leveraging tools like Burp Suite, Nmap, and Metasploit to identify and mitigate security risks, ensuring your applications are fortified against threats."
            />
            <ServiceCard
              image='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/frontend'
              title="Front-End Development"
              description="Crafting dynamic and responsive websites using HTML, CSS, JavaScript, and modern frameworks like React.js, Next.js, and Tailwind CSS, with a focus on user experience and security."
            />
            <ServiceCard
              image='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/backend'
              title="Back-End Development"
              description="Developing secure and scalable back-end systems using Python, ensuring your applications perform efficiently and are protected from vulnerabilities."
            />
          </div>
        </div>

        {/* Highlighted creations div */}
        <div className='py-20 fade-in-section'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl mt-10 text-center text-[#66e0ff] neon-underline'>Highlighted Creations</h1>
            <hr className='border-b-4 border-[#66e0ff] w-48 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent mb-12'>
            Explore my top cybersecurity projects, crafted with precision and innovation. Each showcases my expertise in secure full-stack development and threat intelligence, blending robust functionality with cutting-edge security solutions. Check out my portfolio to see these impactful creations in action.
          </p>

          {/* Project card for smaller screens */}
          <div className='md:hidden my-10'>
            <Swiper
              modules={[EffectCreative, Pagination]}
              effect="creative"
              creativeEffect={{
                prev: {
                  shadow: true,
                  origin: 'left center',
                  translate: ['-5%', 0, -200],
                  rotate: [0, 100, 0],
                },
                next: {
                  origin: 'right center',
                  translate: ['5%', 0, -200],
                  rotate: [0, -100, 0],
                },
              }}
              pagination={true}
              grabCursor={true}
            >
              <SwiperSlide className='justify-center items-center' style={{ display: 'flex' }}>
                <ProjectCard
                  
                  title="Cyber Threat Intelligence Dashboard"
                  techStack={["React.js", "Tailwind CSS", "FastAPI", "PostgreSQL"]}
                  description="Developed a real-time threat intelligence dashboard using React.js and FastAPI. Features include live threat data visualization, IP geolocation tracking, and secure API endpoints, all hosted on Render with CORS-enabled backend for seamless frontend-backend communication."
                  demoLink="https://cyber-threat-dashboard-3mz9.onrender.com"
                  codeLink="https://github.com/KrishRio21/Cyber-Threat_Dashboard"
                />
              </SwiperSlide>
              <SwiperSlide className='justify-center items-center' style={{ display: 'flex' }}>
                <ProjectCard
                 
                  title="Steg-Ultimate"
                  techStack={["React.js", "Tailwind CSS", "Python", "Flask"]}
                  description="Built a steganography tool for secure message encoding and decoding within images. Features include an intuitive UI with encode/decode functionality, a modern homepage with animated buttons, and a responsive design, ensuring accessibility across all devices."
                  demoLink="https://github.com/krishrio21/Stego-Advanced//"
                  codeLink="https://github.com/krishrio21/Stego-Advanced"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Project card for larger screens */}
          <div className='hidden md:flex md:flex-wrap justify-center items-center gap-20'>
            <ProjectCard
              
              title="Cyber Threat Intelligence Dashboard"
              techStack={["React.js", "Tailwind CSS", "FastAPI", "Python","Java script","Vite"]}
              description="Developed a real-time threat intelligence dashboard using React.js and FastAPI. Features include live threat data visualization, IP geolocation tracking, and secure API endpoints, all hosted on Render with CORS-enabled backend for seamless frontend-backend communication."
              demoLink="https://cyber-threat-dashboard-3mz9.onrender.com"
              codeLink="https://github.com/KrishRio21/Cyber-Threat_Dashboard"
            />
            <ProjectCard
              
              title="Steg-Ultimate"
              techStack={["React.js", "Tailwind CSS", "Vite", "SCSS","Javascript"]}
              description="Built a steganography tool for secure message encoding and decoding within images. Features include an intuitive UI with encode/decode functionality, a modern homepage with animated buttons, and a responsive design, ensuring accessibility across all devices."
              demoLink="https://krishrio21.github.io/Stego-Advanced//"
              codeLink="https://github.com/krishrio21/Stego-Advanced"
            />
          </div>
        </div>
        {/* Quote div */}
        <div className='py-20 text-center flex flex-col items-center'>
          <h1 className='font-cairo text-3xl md:text-[40px] font-semibold'>“If, at first, you do not succeed, call it version 1.0”.</h1>
          <p className='mt-6 text-[20px] text-accent'>- Khayri R.R. Woulfe</p>
          <img src={zigzagLine} alt="zigzag-line" className='w-56 md:w-80 mt-10 -skew-x-[20deg]' />
        </div>

        {/* Let's Connect div */}
        <div className='py-20'>
          <Connect />
        </div>
      </section>
    </>
  )
}

export default Home
