import React from 'react'
import { Link } from "react-router-dom";
import { Breadcrumbs, Tooltip } from "@material-tailwind/react";
import SkillBox from './SkillBox';
import htmlIcon from '../../assets/html-logo.svg';
import cssIcon from '../../assets/css-logo.svg';
import jsIcon from '../../assets/js-logo.svg';
import tailwindIcon from '../../assets/tailwind-logo.svg';
import bootstrapIcon from '../../assets/bootstrap-logo.svg';
import reactIcon from '../../assets/react-logo.svg';
import nextIcon from '../../assets/next-logo.svg';
import pythonIcon from '../../assets/python-logo.svg';
import djangoIcon from '../../assets/django-logo.svg';
import wordpressIcon from '../../assets/wordpress-logo.svg';
import figmaIcon from '../../assets/figma-logo.svg';
import vscodeIcon from '../../assets/vscode-logo.svg';
import githubIcon from '../../assets/github-logo.svg';
import educationIcon from '../../assets/education-icon.svg';
import certificationIcon from '../../assets/certification-icon.svg';
import downloadIcon from '../../assets/download-icon.svg';
import arrowIcon from '../../assets/arrow.svg';
import burpSuiteIcon from '../../assets/burpsuite-logo.svg';
import nmapIcon from '../../assets/nmap-logo.svg';
import kaliLinuxIcon from '../../assets/kalilinux-logo.svg';
import wiresharkIcon from '../../assets/wireshark-logo.svg';
import metasploitIcon from "../../assets/metasploit-logo.svg";
import adventOfCyberIcon from '../../assets/Advent-Of-Cyber.svg';

import CustomButton from '../CustomButton';
import Connect from '../Connect';
import './About.css'

function About() {
  return (
    <>
      <section className='about-hero-section relative min-h-[45vh] md:min-h-[65vh] flex flex-col justify-center items-center shadow-lg shadow-black '>
        <h1 className='text-4xl font-cairo md:text-[40px] lg:text-5xl font-bold mb-3 mt-14'>About Me</h1>
        <Breadcrumbs separator={<p className='text-white'>/</p>} className='bg-transparent '>
          <Link to="/" className="opacity-60 text-white text-base" style={{ fontWeight: '400' }}>HOME</Link>
          <Link to="/about" className='text-white text-base' style={{ fontWeight: '400' }}>ABOUT</Link>
        </Breadcrumbs>
      </section>

      <section className='container px-4 mx-auto'>
        {/* Know who I am */}
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center mt-10'>Know Who I Am</h1>
            <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent'>Hi, I'm Sreepada Mohana Krishna, I am a passionate Fullstack Developer, Ethical Hacker, and Cybersecurity Analyst dedicated to building secure, efficient, and scalable web applications.  
          With expertise in both development and security, I help organizations protect their digital assets while delivering seamless user experiences. Currently pursuing a BTech,</p><br />
          <p className='text-accent'>Beyond coding, I enjoy exploring the latest cybersecurity trends, practicing ethical hacking challenges, and learning about emerging technologies, which keep me sharp, motivated, and inspired.</p><br />
          <p className='text-accent'>Committed to continuous learning, I constantly enhance my skills in fullstack development, ethical hacking, and cybersecurity to deliver secure, innovative, and effective solutions across diverse projects.</p>
        </div>

        {/* Experience */}
        <div className="py-20">
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center mt-10'>Experience</h1>
            <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <div className='text-accent space-y-10'>
            <div>
              <h2 className='font-semibold text-lg'>Cyber Security Intern – Edunet Foundation | IBM</h2>
              <p className='text-sm italic mb-1'>Jan 2025 – Feb 2025</p>
              <p>Built a steganography tool, practiced cryptography, and analyzed cyber threats as part of a 6-week program.</p>
              <a href="https://drive.google.com/file/d/1R9WObGpIjQQV_oNxYPyEopph5ddg87AU/view?usp=drive_link" target="_blank" rel="noreferrer">
                <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
              </a>
            </div>
            <div>
              <h2 className='font-semibold text-lg'>Networking Virtual Intern – AICTE-Eduskills | Juniper Networks</h2>
              <p className='text-sm italic mb-1'>Jan 2025 – Mar 2025</p>
              <p>Completed virtual training in networking fundamentals using Juniper technologies.</p>
              <a href="https://drive.google.com/file/d/1D4mYApgdEYW38z7F78y9xvspkUwzuEyg/view?usp=sharing" target="_blank" rel="noreferrer">
                <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
              </a>
            </div>
            <div>
              <h2 className='font-semibold text-lg'>Zero Trust Security Intern – Zscaler</h2>
              <p className='text-sm italic mb-1'>Oct 2024 – Dec 2024</p>
              <p>Implemented Zero Trust security models, enforced access control, and secured cloud resources.</p>
              <a href="https://drive.google.com/file/d/1LAYEhzTbGC9yV1LkZtCV5ln2U6t7k-aW/view?usp=sharing" target="_blank" rel="noreferrer">
                <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
              </a>
            </div>
            <div>
              <h2 className='font-semibold text-lg'>Network Security Associate – Fortinet</h2>
              <p className='text-sm italic mb-1'>Jul 2024 – Sep 2024</p>
              <p>Configured FortiGate firewalls, enforced policies, and contributed to incident response strategies.</p>
              <a href="https://drive.google.com/file/d/1nVr2J7M0hIOpckTNcWkiK-iJtTrXuAhB/view?usp=drive_link" target="_blank" rel="noreferrer">
                <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
              </a>
            </div>
            <div>
              <h2 className='font-semibold text-lg'>Cybersecurity Intern – Palo Alto Networks</h2>
              <p className='text-sm italic mb-1'>Apr 2024 – Jun 2024</p>
              <p>Applied Palo Alto security tech, performed threat analysis, and hardened network defenses.</p>
              <a href="https://drive.google.com/file/d/1Kc49nfL6yfR5b21ykQcVehg5B7yGvOPu/view?usp=drive_link" target="_blank" rel="noreferrer">
                <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
              </a>
            </div>
            <div>
              <h2 className='font-semibold text-lg'>Cybersecurity & Networking Intern – Spypro Security Solutions</h2>
              <p className='text-sm italic mb-1'>Dec 2022 – Jun 2023  (6 Months OFLINE Internship)</p>
              <p>Monitored security systems, managed firewalls, and helped respond to security incidents.</p>
              <a href="https://drive.google.com/file/d/1ngXeYdVUc8HWt37DOItDZlCspjM0yt5p/view?usp=sharing" target="_blank" rel="noreferrer">
                <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
              </a>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="py-20">
          <div className='flex flex-col items-center'>
           <img
            src={educationIcon}
            alt="Education Icon"
            className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300 hover:shadow-[0_0_5px_rgba(102,224,255,0.5)]"
          />
            <h1 className='font-cairo font-bold text-4xl text-center mt-10'>Education</h1>
            <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <div className='text-accent space-y-10'>
            <div>
              <h2 className='font-semibold text-lg'>B.Tech, Information Technology</h2>
              <p className='text-lg italic mb-1'>Prasad V. Potluri Siddhartha Institute of Technology, 2023 – 2026</p>
              <p>Percentage: 70.00%</p>
            </div>
            <div>
              <h2 className='font-semibold text-lg'>Diploma, Computer Science & Engineering</h2>
              <p className='text-lg italic mb-1'>A.A.N.M And V.V.R.S.R Polytechnic, 2021 – 2023</p>
              <p>Percentage: 74.67%</p>
            </div>
             <div>
              <h2 className='font-semibold text-lg'>10th SSC</h2>
              <p className='text-lg italic mb-1'>Rushi Vidya Nikethan, 2020</p>
              <p>Percentage: 98.67%</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="py-20">
          <div className='flex flex-col items-center'>
            <img
            src={certificationIcon}
            alt="Certification Icon"
            className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300 hover:shadow-[0_0_5px_rgba(102,224,255,0.5)]"
          />
            <h1 className='font-cairo font-bold text-4xl text-center mt-10'>Certifications</h1>
            <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <div className='text-accent space-y-10'>
            <div>
              <h2 className='font-semibold text-lg'>CISCO || Ethical Hacker </h2>
              <p className='text-sm italic mb-1'>Dec 17 2024</p> 
              <p>Earned the Cisco Ethical Hacker badge, demonstrating validated skills in ethical hacking methodologies, penetration testing, and network security aligned with industry best practices.</p>
              <a href="https://drive.google.com/file/d/1_DEgHzhpA901R895qOAVEJOQ0m180rcq/view?usp=drive_link" target="_blank" rel="noreferrer">
                <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
              </a>
            </div>
            <div>
              <h2 className='font-semibold text-lg'>NPTEL IIT Kharagpur || Ethical Hacker</h2>
              <p className='text-sm italic mb-1'>Jul 2024 – Oct 2025</p> 
              <p> Silver Badge </p>
              <p>gaining hands-on knowledge in cybersecurity principles, ethical hacking techniques, and system vulnerability assessment.</p>
              <a href="https://drive.google.com/file/d/1sPejnlj6AyUYpYsu7xlbduNN8iMl2JD2/view?usp=drive_link" target="_blank" rel="noreferrer">
                <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
              </a>
            </div>
            <div>
              <h2 className='font-semibold text-lg'>Google Cloud Cybersecurity Certificate</h2>
              <p className='text-sm italic mb-1'>Dec 2024 – Jan 2025</p>
              <p>Learned cloud security and threat detection.</p>
              <a href="https://www.credly.com/badges/8335693a-fc9e-48c5-a40b-b2641497bbde/public_url" target="_blank" rel="noreferrer">
                <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
              </a>
            </div>
            <div>
              <h2 className='font-semibold text-lg'>IBM Cybersecurity Analyst Professional Certificate</h2>
              <p className='text-sm italic mb-1'>Nov 2024 – Jan 2025</p>
              <p>Gained skills in cybersecurity analysis.</p>
              <a href="https://drive.google.com/file/d/1GSSSKDLNipwH1lRSietH8188nhNRz2ml/view?usp=drive_link" target="_blank" rel="noreferrer">
                <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
              </a>
            </div>
            <div>
              <h2 className='font-semibold text-lg'>IIT Bombay||Python 3.4.3</h2>
              <p className='text-sm italic mb-1'>Oct 2024</p>
              <p>Mastered Python programming.</p>
              <a href="https://drive.google.com/file/d/1WWFxswFTllWF3iPu_0xjEw9fSZYAagQq/view?usp=drive_link" target="_blank" rel="noreferrer">
                <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
              </a>
            </div>
            <div>
              <h2 className='font-semibold text-lg'>Infosys Springboard || CompTIA Security+ Certification (SY0-501)</h2>
              <p className='text-sm italic mb-1'>Dec 1 2024</p>
              <p>Completed the CompTIA Security+ (SY0-501) certification via Infosys Springboard, gaining hands-on knowledge in risk management, cryptography, network security, and threat analysis in line with global cybersecurity standards.</p>
              <a href="https://drive.google.com/file/d/1ircZ3ffXBV12DjjijkSmd9C7IuuUcowz/view?usp=drive_link" target="_blank" rel="noreferrer">
                <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
              </a>
            </div>
            <div>
              <h2 className='font-semibold text-lg'>Infosys Springboard || Programming Using C++</h2>
              <p className='text-sm italic mb-1'>Feb 17 2024</p>
              <p>Developed proficiency in C++ programming.</p>
              <a href="https://drive.google.com/file/d/1ZpKgd2XX2eIsBkV3EfkpyDw32eLc-v3N/view?usp=drive_link" target="_blank" rel="noreferrer">
                <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
              </a>
            </div>
            
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="py-20">
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center mt-10'>Areas of Expertise</h1>
            <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent'>I’ve built a diverse skill set through education and hands-on projects. My expertise spans several areas, allowing me to tackle complex challenges effectively. Here are key areas where I excel and deliver high-quality results.</p>
          <div className='flex flex-wrap justify-center gap-12 my-14'>
            <Tooltip content="HTML"><div><SkillBox icon={htmlIcon} className='bg-htmlColor border-htmlColor' /></div></Tooltip>
            <Tooltip content="CSS"><div><SkillBox icon={cssIcon} className='bg-cssColor border-cssColor' /></div></Tooltip>
            <Tooltip content="JavaScript"><div><SkillBox icon={jsIcon} className='bg-jsColor border-jsColor' /></div></Tooltip>
            <Tooltip content="Bootstrap"><div><SkillBox icon={bootstrapIcon} className='bg-bootstrapColor border-bootstrapColor' /></div></Tooltip>
            <Tooltip content="React JS"><div><SkillBox icon={reactIcon} className='bg-reactColor border-reactColor' /></div></Tooltip>
            <Tooltip content="Python"><div><SkillBox icon={pythonIcon} className='bg-pythonColor border-pythonColor' /></div></Tooltip>
            <Tooltip content="Burp Suite"><div><SkillBox icon={burpSuiteIcon} className='bg-burpSuiteColor border-burpSuiteColor' /></div></Tooltip>
            <Tooltip content="Nmap"><div><SkillBox icon={nmapIcon} className='bg-nmapColor border-nmapColor' /></div></Tooltip>
            <Tooltip content="Kali Linux"><div><SkillBox icon={kaliLinuxIcon} className='bg-kaliLinuxColor border-kaliLinuxColor' /></div></Tooltip>
            <Tooltip content="Wireshark"><div><SkillBox icon={wiresharkIcon} className='bg-wiresharkColor border-wiresharkColor' /></div></Tooltip>
            <Tooltip content="Metasploit"><div><SkillBox icon={metasploitIcon} className='bg-metasploitColor border-metasploitColor' /></div></Tooltip>
          </div>
        </div>
        

{/* Extracurricular Activities */}
<div className="py-20">
  <div className='flex flex-col items-center'>
    <h1 className='font-cairo font-bold text-4xl text-center mt-10'>Extracurricular Activities</h1>
    <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
  </div>
  <div className='text-accent space-y-10'>
    <div>
      <h2 className='font-semibold text-lg'>Advent of Cyber 2024</h2>
      <p className='text-sm italic mb-1'>TryHackMe</p>
      <p className='text-LS italic mb-1'>BADGE:-</p>
      <img src={adventOfCyberIcon} alt="Advent of Cyber Badge" className="advent-of-cyber-badge my-2" />
      <p>Practiced ethical hacking challenges and CTF challenges.</p>
      
      <a href="https://drive.google.com/file/d/1hqmgblTHOu1tazA0h-1tmOCrbZQiREWA/view?usp=drive_link" target="_blank" rel="noreferrer">
        <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
      </a>
    </div>
    <div>
      <h2 className='font-semibold text-lg'>Cybersecurity Job Simulation</h2>
      <p className='text-sm italic mb-1'>Deloitte | Forage</p>
      <p>Simulated real-world cybersecurity tasks.</p>
      <a href="https://drive.google.com/file/d/1hzf18Xs9dvvPpYSYKneT8xDASZh1Ikd5/view?usp=sharing" target="_blank" rel="noreferrer">
        <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
      </a>
    </div>
    <div>
      <h2 className='font-semibold text-lg'>Cyber Security Analyst</h2>
      <p className='text-sm italic mb-1'>Tata | Forage</p>
      <p>Analyzed threats and implemented security measures.</p>
      <a href="https://drive.google.com/file/d/19sY8CM5E2m4xny9wy3ANXqeQzqJKMs7N/view?usp=sharing" target="_blank" rel="noreferrer">
        <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
      </a>
    </div>
    <div>
      <h2 className='font-semibold text-lg'>Cyber Security Course</h2>
      <p className='text-sm italic mb-1'>Tech Mahindra | Skill India Digital Hub</p>
      <p>Learned core cybersecurity principles.</p>
      <a href="https://drive.google.com/file/d/1ARxo8SzrnP8XgXFe3aUWB5nmsFNTVQNW/view?usp=drive_link" target="_blank" rel="noreferrer">
        <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
      </a>
    </div>
    <div>
      <h2 className='font-semibold text-lg'>Cybersecurity Job Simulation</h2>
      <p className='text-sm italic mb-1'>Mastercard | Forage</p>
      <p>Conducted security assessments and simulations.</p>
      <a href="https://drive.google.com/file/d/1lw9flBLGpugpX2aHTvUY4nxVZghiCU4C/view?usp=sharing" target="_blank" rel="noreferrer">
        <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
      </a>
    </div>
    <div>
      <h2 className='font-semibold text-lg'>Cybersecurity Job Simulation</h2>
      <p className='text-sm italic mb-1'>PwC | Forage</p>
      <p>Strengthened skills in cybersecurity operations.</p>
      <a href="https://drive.google.com/file/d/1Cry81fHdhh2PJ6FaT0t1gXj8t5cLa9-h/view?usp=sharing" target="_blank" rel="noreferrer">
        <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
      </a>
    </div>
    <div>
      <h2 className='font-semibold text-lg'>Complete Ethical Hacking Masterclass: Go from Zero to Hero</h2>
      <p className='text-sm italic mb-1'>Udemy</p>
      <p>Mastered ethical hacking techniques.</p>
      <a href="https://drive.google.com/file/d/16svyykxqCZJEf9pE6Kk9rZ2T-cyCgErJ/view?usp=sharing" target="_blank" rel="noreferrer">
        <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
      </a>
    </div>
    <div>
      <h2 className='font-semibold text-lg'>Reverse Engineering & Malware Analysis in 21 Hours | REMAC+</h2>
      <p className='text-sm italic mb-1'>Udemy</p>
      <p>Learned reverse engineering and malware analysis.</p>
      <a href="https://drive.google.com/file/d/1EKtvpgIbtJ8yEQX5_nEZNRwnumDOvXfv/view?usp=sharing" target="_blank" rel="noreferrer">
        <button className="mt-2 px-4 py-1 bg-secondary text-white rounded hover:opacity-90 transition">Show Certificate</button>
      </a>
    </div>
  </div>
</div>
{/* Skills */}
<div className="py-20">
  <div className='flex flex-col items-center'>
    <h1 className='font-cairo font-bold text-4xl text-center mt-10'>Skills</h1>
  
    <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
  </div>
  <div className='text-accent flex flex-wrap'>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>VAPT</p>
    </div>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>Ethical Hacking</p>
    </div>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>Web Application Security</p>
    </div>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>Computer Networking</p>
    </div>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>Cybersecurity</p>
    </div>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>Linux</p>
    </div>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>Java</p>
    </div>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>Python</p>
    </div>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>C++</p>
    </div>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>C</p>
    </div>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>SQL</p>
    </div>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>JavaScript</p>
    </div>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>CSS</p>
    </div>
    <div className='w-1/2 mb-4'>
      <p className='font-semibold text-lg'>HTML</p>
    </div>
  </div>
</div>
      </section>
    </>
  )
}

export default About;