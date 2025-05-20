import React from 'react'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ProjectCard from './ProjectCard';
import Connect from '../Connect'
import './Portfolio.css'

function Portfolio() {
  const projects = [
    {
      title: "Steganography-Advanced",
      techStack: ["React", "Vite", "Tailwind CSS", "JavaScript",],
      description: "A browser-based steganography tool to securely hide and extract messages within images. Features an intuitive UI with encoding and decoding functionality, built as a responsive single-page application hosted on GitHub Pages.",
      demoLink: "https://krishrio21.github.io/Stego-Advanced/",
      codeLink: "https://github.com/krishrio21/Stego-Advanced"
    },
    {
      title: "Cyber Threat Dashboard",
      techStack: ["React", "Java Script", "Python", "Fast API", "Tailwind CSS"],
      description: "A dynamic dashboard for real-time cyber threat visualization. Integrates with threat intelligence APIs to display attack patterns, vulnerabilities, and network anomalies through interactive charts, empowering security analysts with a responsive UI.",
      demoLink: "https://cyber-threat-dashboard-3mz9.onrender.com",
      codeLink: "https://github.com/KrishRio21/Cyber-Threat_Dashboard"
    },
    {
      title: "Wireless Network Setup with VLAN Configuration",
      techStack: ["Cisco Packet Tracer", "VLAN", "Wireless Networking"],
      description: "Designed and implemented a secure wireless network with VLAN configuration in Cisco Packet Tracer. Configured a client-server architecture, ensuring efficient traffic segmentation, enhanced security, and optimal network performance across devices.",
      demoLink: "https://wireless-vlan-demo.netlify.app/",
      codeLink: "https://github.com/yourusername/wireless-vlan-project"
    },
  ];

  return (
    <>
      <section className='portfolio-hero-section relative min-h-[45vh] md:min-h-[65vh] flex flex-col justify-center items-center shadow-lg shadow-black'>
        <h1 className='text-4xl font-cairo md:text-[40px] lg:text-5xl font-bold mb-3 mt-14'>Portfolio</h1>
        <Breadcrumbs separator={<p className='text-white'>/</p>} className='bg-transparent '>
          <Link to="/" className="opacity-60 text-white text-base" style={{ fontWeight: '400' }}>HOME</Link>
          <Link to="/portfolio" className='text-white text-base' style={{ fontWeight: '400' }}>PORTFOLIO</Link>
        </Breadcrumbs>
      </section>
      <section className='container px-4 mx-auto bg-glow'>
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center mt-10 text-[#66e0ff]'>ᴄʏʙᴇʀ-ᴅʀɪᴠᴇɴ ꜰᴜʟʟ ꜱᴛᴀᴄᴋ ꜱᴏʟᴜᴛɪᴏɴꜱ</h1>
            <hr className='border-b-4 border-[#66e0ff] w-40 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent'>Dive into my latest cybersecurity projects, where cutting-edge technology meets secure design. Experience innovation through a futuristic lens.</p>
          <div className='flex justify-center items-center flex-wrap gap-20 my-16'>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                techStack={project.techStack}
                description={project.description}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
                className={`fade-in delay-${index}`}
              />
            ))}
          </div>
        </div>

        {/* Let's Connect div */}
        <div className='py-20'>
          <Connect />
        </div>
      </section>
    </>
  );
}

export default Portfolio;