import React from 'react'
import githubhicon from '../../assets/github-icon.svg'
import linkicon from '../../assets/link-icon.svg'
import CustomButton from '../CustomButton';

function ProjectCard({ title, techStack = [], description, demoLink, codeLink, className }) {
    return (
        <div className={`relative w-[380px] h-[450px] bg-[#010b13] border border-[#ffffff25] rounded-lg p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_15px_rgba(102,224,255,0.3)] ${className}`}>
            {/* Typing Effect Title with Glowing Underline */}
            <div className="relative">
                <h2 className="text-xl font-semibold text-[#66e0ff] typing-glow" data-text={title}>
                    {title}
                </h2>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="tech-tag text-xs font-medium text-[#66e0ff]/70 bg-[#66e0ff]/10 px-2 py-1 rounded-full transition-all duration-300 hover:bg-[#66e0ff]/30 hover:text-[#66e0ff] hover:shadow-[0_0_5px_rgba(102,224,255,0.5)]"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Description */}
            <p className="text-accent text-base line-clamp-8 flex-grow">{description}</p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 justify-center mt-6">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <CustomButton
                        text="Demo"
                        icon={linkicon}
                        className="w-[18px] neon-pulse hover:bg-[#66e0ff] hover:text-black transition-colors duration-300"
                    />
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    <CustomButton
                        text="Code"
                        icon={githubhicon}
                        className="w-5 neon-pulse hover:bg-[#66e0ff] hover:text-black transition-colors duration-300"
                    />
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;